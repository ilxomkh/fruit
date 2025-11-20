import Footer from '../components/Footer.jsx';
import ImportHeroSection from '../sections/ImportHeroSection.jsx';
import ImportContentSection from '../sections/ImportContentSection.jsx';
import ImportProcessSection from '../sections/ImportProcessSection.jsx';
import ImportClientsSection from '../sections/ImportClientsSection.jsx';
import CallToAction from '../sections/CallToAction.jsx';

export default function ImportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ImportHeroSection />
      <ImportContentSection />
      <ImportProcessSection />
      <ImportClientsSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

