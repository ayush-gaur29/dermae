import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';

const RouterContext = createContext({
  pathname: '/',
  search: '',
  hash: '',
  navigate: () => {},
  params: {}
});

/**
 * Match a route path pattern (e.g. '/treatments/:slug' or '/') against a current pathname.
 */
function matchPath(pattern, pathname) {
  if (pattern === '*') return { matches: true, params: {} };
  
  // Normalize trailing slashes
  const cleanPattern = pattern.endsWith('/') && pattern.length > 1 ? pattern.slice(0, -1) : pattern;
  const cleanPath = pathname.endsWith('/') && pathname.length > 1 ? pathname.slice(0, -1) : pathname;

  if (cleanPattern === cleanPath) {
    return { matches: true, params: {} };
  }

  const patternParts = cleanPattern.split('/').filter(Boolean);
  const pathParts = cleanPath.split('/').filter(Boolean);

  if (patternParts.length !== pathParts.length) {
    return { matches: false, params: {} };
  }

  const params = {};
  for (let i = 0; i < patternParts.length; i++) {
    const pPart = patternParts[i];
    const actualPart = pathParts[i];

    if (pPart.startsWith(':')) {
      const paramName = pPart.slice(1);
      params[paramName] = decodeURIComponent(actualPart);
    } else if (pPart !== actualPart) {
      return { matches: false, params: {} };
    }
  }

  return { matches: true, params };
}

export function BrowserRouter({ children }) {
  const [locationState, setLocationState] = useState(() => ({
    pathname: window.location.pathname || '/',
    search: window.location.search || '',
    hash: window.location.hash || ''
  }));

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setLocationState({
        pathname: window.location.pathname || '/',
        search: window.location.search || '',
        hash: window.location.hash || ''
      });
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to, options = {}) => {
    if (!to) return;

    if (to.startsWith('http://') || to.startsWith('https://') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      window.location.href = to;
      return;
    }

    // Split pathname, search, hash
    const url = new URL(to, window.location.origin);
    const newPath = url.pathname;
    const newSearch = url.search;
    const newHash = url.hash;

    if (options.replace) {
      window.history.replaceState({}, '', to);
    } else {
      window.history.pushState({}, '', to);
    }

    setLocationState({
      pathname: newPath,
      search: newSearch,
      hash: newHash
    });

    if (!newHash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(newHash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const contextValue = useMemo(() => ({
    ...locationState,
    navigate,
    params: {}
  }), [locationState, navigate]);

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
}

export function useLocation() {
  const ctx = useContext(RouterContext);
  return {
    pathname: ctx.pathname,
    search: ctx.search,
    hash: ctx.hash
  };
}

export function useNavigate() {
  const ctx = useContext(RouterContext);
  return ctx.navigate;
}

export function useParams() {
  const ctx = useContext(RouterContext);
  return ctx.params || {};
}

export function Link({ to, children, className = '', onClick, replace = false, ...props }) {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) onClick(e);

    // Let browser handle special clicks (Cmd/Ctrl + click, new tab, etc.)
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey
    ) {
      e.preventDefault();
      navigate(to, { replace });
    }
  };

  return (
    <a href={to} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, children, className = '', activeClassName = '', ...props }) {
  const { pathname } = useLocation();
  const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to);

  const resolvedClass = typeof className === 'function'
    ? className({ isActive })
    : `${className} ${isActive ? activeClassName : ''}`;

  return (
    <Link to={to} className={resolvedClass} aria-current={isActive ? 'page' : undefined} {...props}>
      {children}
    </Link>
  );
}

export function Routes({ children }) {
  const { pathname } = useLocation();
  const ctx = useContext(RouterContext);

  let matchedElement = null;
  let matchedParams = {};

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child) || matchedElement) return;

    const { path, element } = child.props;
    const match = matchPath(path, pathname);

    if (match.matches) {
      matchedElement = element;
      matchedParams = match.params;
    }
  });

  if (!matchedElement) return null;

  return (
    <RouterContext.Provider value={{ ...ctx, params: matchedParams }}>
      {matchedElement}
    </RouterContext.Provider>
  );
}

export function Route({ path, element }) {
  return element;
}

