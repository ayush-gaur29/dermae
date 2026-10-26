import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from './router/index.jsx';
import { useRevealAll } from './hooks/useReveal.js';
import { AnnouncementBar } from './components/layout/AnnouncementBar.jsx';
import { Navbar } from './components/layout/Navbar.jsx';
import { Footer } from './components/layout/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import TreatmentsPage from './pages/TreatmentsPage.jsx';
import TreatmentDetailPage from './pages/TreatmentDetailPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import BookConsultationPage from './pages/BookConsultationPage.jsx';

function AppContent() {
  const { pathname } = useLocation();
  
  // Refresh reveal animations whenever route changes
  useRevealAll(pathname);

  return (
    <div className="flex min-h-screen flex-col bg-ivory text-forest selection:bg-emerald/20 selection:text-forest">
      <AnnouncementBar />
      <Navbar />
      <main id="main" className="flex-1 overflow-x-clip">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/treatments" element={<TreatmentsPage />} />
          <Route path="/treatments/:slug" element={<TreatmentDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/book-consultation" element={<BookConsultationPage />} />
          {/* Fallback to Home */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
