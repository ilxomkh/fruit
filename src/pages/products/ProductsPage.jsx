import Footer from '../../components/Footer.jsx';
import ProductsHeroSection from '../../sections/ProductsHeroSection.jsx';
import ProductsSection from '../../sections/ProductsSection.jsx';
import FruitsCallToAction from '../../sections/FruitsCallToAction.jsx';

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ProductsHeroSection />
      <ProductsSection />
      <FruitsCallToAction />
      <Footer />
    </div>
  );
}

