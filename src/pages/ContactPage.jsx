import Footer from '../components/Footer.jsx';
import ContactHeroSection from '../sections/ContactHeroSection.jsx';
import ContactContentSection from '../sections/ContactContentSection.jsx';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ContactHeroSection />
      <ContactContentSection />
      <Footer />
    </div>
  );
}

