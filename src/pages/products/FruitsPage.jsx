import { useState } from 'react';
import Footer from '../../components/Footer.jsx';
import FruitsHeroSection from '../../sections/FruitsHeroSection.jsx';
import FruitsFilterSection from '../../sections/FruitsFilterSection.jsx';
import FruitsProductsSection from '../../sections/FruitsProductsSection.jsx';
import FruitsCallToAction from '../../sections/FruitsCallToAction.jsx';

export default function FruitsPage() {
  const [selectedFilter, setSelectedFilter] = useState('uzbekistan');

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <FruitsHeroSection />
      <FruitsFilterSection selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <FruitsProductsSection selectedFilter={selectedFilter} />
      <FruitsCallToAction />
      <Footer />
    </div>
  );
}

