import { useMemo } from 'react';
import { useLocale } from '../i18n.jsx';

// Мок данные овощей в формате API (category: 1)
const mockProducts = [
  {
    id: 101,
    name_ru: 'Помидор',
    name_uz: 'Pomidor',
    category: 1, // овощ
    is_global: false,
    description: 'Свежий помидор',
    price: 12000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/tomato-isolated-white_253984-4666.jpg',
    stock: 150,
    is_active: 1,
  },
  {
    id: 102,
    name_ru: 'Огурец',
    name_uz: 'Bodring',
    category: 1,
    is_global: false,
    description: 'Свежий огурец',
    price: 10000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/fresh-cucumber-with-water-droplets-isolated-white-background-clipping-path_252965-1060.jpg',
    stock: 140,
    is_active: 1,
  },
  {
    id: 103,
    name_ru: 'Перец',
    name_uz: 'Qalampir',
    category: 1,
    is_global: false,
    description: 'Сладкий перец',
    price: 15000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-vector/vector-red-hot-chilli-white-background_642210-804.jpg',
    stock: 120,
    is_active: 1,
  },
  {
    id: 104,
    name_ru: 'Морковь',
    name_uz: 'Sabzi',
    category: 1,
    is_global: false,
    description: 'Свежая морковь',
    price: 8000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/fresh-carrot-isolated-white-background-clipping-path_252965-755.jpg',
    stock: 160,
    is_active: 1,
  },
  {
    id: 105,
    name_ru: 'Капуста',
    name_uz: 'Karam',
    category: 1,
    is_global: false,
    description: 'Свежая капуста',
    price: 7000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/cabbage-isolated-white-background_188078-20292.jpg',
    stock: 130,
    is_active: 1,
  },
  {
    id: 106,
    name_ru: 'Лук',
    name_uz: 'Piyoz',
    category: 1,
    is_global: false,
    description: 'Свежий лук',
    price: 9000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/large-bulb-onion-isolated-white_320146-11.jpg',
    stock: 145,
    is_active: 1,
  },
  {
    id: 107,
    name_ru: 'Картофель',
    name_uz: 'Kartoshka',
    category: 1,
    is_global: true,
    description: 'Свежий картофель',
    price: 11000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/potatoes-white-background_62193-2166.jpg',
    stock: 200,
    is_active: 1,
  },
  {
    id: 108,
    name_ru: 'Баклажан',
    name_uz: 'Baqlajon',
    category: 1,
    is_global: false,
    description: 'Свежий баклажан',
    price: 13000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/eggplant-isolated-white-background_146377-2308.jpg',
    stock: 90,
    is_active: 1,
  },
  {
    id: 109,
    name_ru: 'Кабачок',
    name_uz: 'Kabachok',
    category: 1,
    is_global: false,
    description: 'Свежий кабачок',
    price: 10000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/fresh-one-squash-vegetable-marrow-zucchini-whole-isolated-white-background-flat-lay-top-view_438009-4941.jpg',
    stock: 85,
    is_active: 1,
  },
  {
    id: 110,
    name_ru: 'Батат',
    name_uz: 'Batat',
    category: 1,
    is_global: true,
    description: 'Сладкий батат',
    price: 18000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/sweet-yam-potato-white-background_253984-4264.jpg',
    stock: 60,
    is_active: 1,
  },
  {
    id: 111,
    name_ru: 'Спаржа',
    name_uz: 'Sarsabil',
    category: 1,
    is_global: true,
    description: 'Свежая спаржа',
    price: 35000,
    unit: 'кг',
    image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYm42HPFBELAoa8IOylm-WtkhuosB_YnmCuw&s',
    stock: 40,
    is_active: 1,
  },
  {
    id: 112,
    name_ru: 'Артишок',
    name_uz: 'Artishok',
    category: 1,
    is_global: true,
    description: 'Свежий артишок',
    price: 40000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/fresh-raw-artichoke-isolated-white-background_185193-78416.jpg',
    stock: 30,
    is_active: 1,
  },
  {
    id: 113,
    name_ru: 'Брокколи',
    name_uz: 'Brokkoli',
    category: 1,
    is_global: true,
    description: 'Свежая брокколи',
    price: 22000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/broccoli-isolated-white-background_29402-626.jpg',
    stock: 50,
    is_active: 1,
  },
  {
    id: 114,
    name_ru: 'Цветная капуста',
    name_uz: 'Gul karam',
    category: 1,
    is_global: true,
    description: 'Свежая цветная капуста',
    price: 16000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/cauliflower-isolated-white-background_112793-6250.jpg',
    stock: 70,
    is_active: 1,
  },
  {
    id: 115,
    name_ru: 'Шпинат',
    name_uz: 'Shpinat',
    category: 1,
    is_global: true,
    description: 'Свежий шпинат',
    price: 18000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/green-kale-isolated-white-background_62856-5562.jpg',
    stock: 45,
    is_active: 1,
  },
  {
    id: 116,
    name_ru: 'Руккола',
    name_uz: 'Rukkola',
    category: 1,
    is_global: true,
    description: 'Свежая руккола',
    price: 25000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/fresh-arugula-rucola-leaves-white-background_525574-3498.jpg',
    stock: 35,
    is_active: 1,
  },
];

export default function VegetablesProductsSection({ selectedFilter }) {
  const { locale } = useLocale();

  // Фильтруем продукты: только овощи (category === 1) и по выбранному фильтру
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      // Только овощи
      if (product.category !== 1) return false;
      
      // Фильтр по региону
      if (selectedFilter === 'uzbekistan') {
        return !product.is_global; // Только узбекские продукты
      } else if (selectedFilter === 'global') {
        return product.is_global; // Только глобальные продукты
      }
      
      return true;
    });
  }, [selectedFilter]);

  const getName = (product) => {
    return locale === 'uz' ? product.name_uz : product.name_ru;
  };

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 lg:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col items-center bg-white"
            >
              <div className="mb-3 flex h-48 w-full items-center justify-center overflow-hidden bg-white sm:h-56 lg:h-64">
                {product.image_url ? (
                  <img
                    src={product.image_url}
                    alt={getName(product)}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400">
                    <span className="text-sm">No image</span>
                  </div>
                )}
              </div>
              <h3 className="text-center text-sm font-medium text-slate-900 sm:text-base">
                {getName(product)}
              </h3>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-lg text-slate-600">
              {locale === 'uz' ? 'Mahsulotlar topilmadi' : 'Продукты не найдены'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

