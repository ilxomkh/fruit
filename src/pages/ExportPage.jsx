import Footer from '../components/Footer.jsx';
import ExportHeroSection from '../sections/ExportHeroSection.jsx';
import ExportContentSection from '../sections/ExportContentSection.jsx';
import ExportProcessSection from '../sections/ExportProcessSection.jsx';
import ExportGeographySection from '../sections/ExportGeographySection.jsx';
import CallToAction from '../sections/CallToAction.jsx';

export default function ExportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ExportHeroSection />
      <ExportContentSection />
      <ExportProcessSection />
      <ExportGeographySection />
      <CallToAction />
      <Footer />
    </div>
  );
}

