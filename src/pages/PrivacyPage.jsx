import Footer from '../components/Footer.jsx';
import PrivacyHeroSection from '../sections/PrivacyHeroSection.jsx';
import PrivacyContentSection from '../sections/PrivacyContentSection.jsx';

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PrivacyHeroSection />
      <PrivacyContentSection />
      <Footer />
    </div>
  );
}

