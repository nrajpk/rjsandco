import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import ServiceDetail from './pages/ServiceDetail.jsx';
import Industries from './pages/Industries.jsx';
import Resources from './pages/Resources.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import Disclaimer from './pages/Disclaimer.jsx';
import NotFound from './pages/NotFound.jsx';
import Letterhead from './pages/Letterhead.jsx';
import Connect from './pages/Connect.jsx';
import PrintCard from './pages/PrintCard.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Internal tool, outside the site chrome so only the sheet prints. */}
        <Route path="rjs/letterhead" element={<Letterhead />} />
        {/* Internal tool: printable business card with the QR to /connect/<slug>. */}
        <Route path="rjs/card" element={<PrintCard />} />
        <Route path="rjs/card/:slug" element={<PrintCard />} />
        {/* Digital business cards behind the QR codes; people live in src/data/people.js. */}
        <Route path="connect" element={<Connect />} />
        <Route path="connect/:slug" element={<Connect />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="industries" element={<Industries />} />
          <Route path="resources" element={<Resources />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

