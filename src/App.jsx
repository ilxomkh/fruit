import { LocaleProvider } from './i18n.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FruitsPage from './pages/products/FruitsPage.jsx';
import VegetablesPage from './pages/products/VegetablesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import GlassFilters from './components/GlassFilters.jsx';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <LocaleProvider>
      <GlassFilters />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/products/fruits" element={<FruitsPage />} />
        <Route path="/products/vegetables" element={<VegetablesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </LocaleProvider>
  );
}

