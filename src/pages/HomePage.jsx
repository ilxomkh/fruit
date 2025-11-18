import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection.jsx';
import AboutUs from '../sections/AboutUs.jsx';
import ProductsSection from '../sections/ProductsSection.jsx';
import WhyChooseUs from '../sections/WhyChooseUs.jsx';
import ClientsCarousel from '../sections/ClientsCarousel.jsx';
import CallToAction from '../sections/CallToAction.jsx';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#products') {
      const target = document.getElementById('products');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location]);

  return (
    <>
      <HeroSection />
      <AboutUs />
      <ProductsSection />
      <WhyChooseUs />
      <ClientsCarousel />
      <CallToAction />
      <Footer />
    </>
  );
}

