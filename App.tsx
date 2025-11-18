
import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import BlogPage from './pages/BlogPage';
import PostPage from './pages/PostPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import CookiesPage from './pages/CookiesPage';
import ReturnsPage from './pages/ReturnsPage';
import ContactPage from './pages/ContactPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import Footer from './components/Footer';

const MainLayout: React.FC = () => {
  return (
    <div className="bg-neutral-100 text-neutral-800 min-h-screen font-sans antialiased">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sitemap.xml" element={<SitemapPage />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/posts/:slug" element={<PostPage />} />
          <Route path="/termos-de-servico" element={<TermsPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
          <Route path="/politica-de-cookies" element={<CookiesPage />} />
          <Route path="/devolucoes-e-trocas" element={<ReturnsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
