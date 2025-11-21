import { useState } from 'react';
import Footer from '../../components/Footer.jsx';
import VegetablesHeroSection from '../../sections/VegetablesHeroSection.jsx';
import FruitsFilterSection from '../../sections/FruitsFilterSection.jsx';
import VegetablesProductsSection from '../../sections/VegetablesProductsSection.jsx';
import VegetablesCallToAction from '../../sections/VegetablesCallToAction.jsx';

export default function VegetablesPage() {
  const [selectedFilter, setSelectedFilter] = useState('uzbekistan');

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <VegetablesHeroSection />
      <FruitsFilterSection selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <VegetablesProductsSection selectedFilter={selectedFilter} />
      <VegetablesCallToAction />
      <Footer />
    </div>
  );
}

