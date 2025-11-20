import Footer from '../components/Footer.jsx';
import AboutHeroSection from '../sections/AboutHeroSection.jsx';
import AboutContentSection from '../sections/AboutContentSection.jsx';
import CallToAction from '../sections/CallToAction.jsx';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <AboutHeroSection />
      <AboutContentSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

