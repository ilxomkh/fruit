import { useMemo } from 'react';
import { useLocale } from '../i18n.jsx';

// Мок данные продуктов в формате API
const mockProducts = [
  {
    id: 1,
    name_ru: 'Виноград',
    name_uz: 'Uzum',
    category: 0, // фрукт
    is_global: false,
    description: 'Свежий виноград',
    price: 15000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/grapes-white-background_181303-4423.jpg',
    stock: 100,
    is_active: 1,
  },
  {
    id: 2,
    name_ru: 'Черешня',
    name_uz: 'Gilos',
    category: 0,
    is_global: false,
    description: 'Сладкая черешня',
    price: 25000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/sweet-cherries-white_183352-2866.jpg',
    stock: 80,
    is_active: 1,
  },
  {
    id: 3,
    name_ru: 'Гранат',
    name_uz: 'Anor',
    category: 0,
    is_global: false,
    description: 'Сочный гранат',
    price: 20000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/pomegranate_253984-4923.jpg',
    stock: 60,
    is_active: 1,
  },
  {
    id: 4,
    name_ru: 'Абрикос',
    name_uz: 'O\'rik',
    category: 0,
    is_global: false,
    description: 'Спелый абрикос',
    price: 18000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/apricot-white-background_183352-2884.jpg',
    stock: 90,
    is_active: 1,
  },
  {
    id: 5,
    name_ru: 'Нектарин',
    name_uz: 'Nektarin',
    category: 0,
    is_global: true,
    description: 'Сочный нектарин',
    price: 22000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/nectarines-with-slice-leaves-isolated-white-background_171081-1975.jpg',
    stock: 70,
    is_active: 1,
  },
  {
    id: 6,
    name_ru: 'Персик',
    name_uz: 'Shaftoli',
    category: 0,
    is_global: true,
    description: 'Ароматный персик',
    price: 20000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/ripe-peach-white-background_272787-447.jpg',
    stock: 85,
    is_active: 1,
  },
  {
    id: 7,
    name_ru: 'Яблоко',
    name_uz: 'Olma',
    category: 0,
    is_global: false,
    description: 'Хрустящее яблоко',
    price: 12000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/red-apples-isolated-white-background_299651-65.jpg',
    stock: 120,
    is_active: 1,
  },
  {
    id: 8,
    name_ru: 'Хурма',
    name_uz: 'Xurmo',
    category: 0,
    is_global: false,
    description: 'Сладкая хурма',
    price: 16000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/one-persimmon-isolated-white-background-whole-ripe-tropical-fruit-with-shade_92795-1708.jpg',
    stock: 50,
    is_active: 1,
  },
  {
    id: 9,
    name_ru: 'Слива',
    name_uz: 'Olxo\'ri',
    category: 0,
    is_global: false,
    description: 'Сочная слива',
    price: 14000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/plum-isolated-ripe-red-plums-with-leaves-white-background_531456-774.jpg',
    stock: 75,
    is_active: 1,
  },
  {
    id: 10,
    name_ru: 'Груша',
    name_uz: 'Nok',
    category: 0,
    is_global: false,
    description: 'Сладкая груша',
    price: 17000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/pear-isolated-white-background_62856-2775.jpg',
    stock: 65,
    is_active: 1,
  },
  {
    id: 11,
    name_ru: 'Банан',
    name_uz: 'Banan',
    category: 0,
    is_global: true,
    description: 'Спелый банан',
    price: 18000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/bananas-white-background_73289-80.jpg',
    stock: 90,
    is_active: 1,
  },
  {
    id: 12,
    name_ru: 'Апельсин',
    name_uz: 'Apelsin',
    category: 0,
    is_global: true,
    description: 'Сочный апельсин',
    price: 19000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/fresh-orange-isolated-white-background_93675-1323.jpg',
    stock: 110,
    is_active: 1,
  },
  {
    id: 13,
    name_ru: 'Манго',
    name_uz: 'Mango',
    category: 0,
    is_global: true,
    description: 'Сладкое манго',
    price: 28000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/mango-isolated-white-background_88281-84.jpg',
    stock: 45,
    is_active: 1,
  },
  {
    id: 14,
    name_ru: 'Киви',
    name_uz: 'Kivi',
    category: 0,
    is_global: true,
    description: 'Свежий киви',
    price: 24000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/kiwi-fruit-isolated-white-background_26628-50.jpg',
    stock: 55,
    is_active: 1,
  },
  {
    id: 15,
    name_ru: 'Авокадо',
    name_uz: 'Avokado',
    category: 0,
    is_global: true,
    description: 'Спелый авокадо',
    price: 35000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/avocado-white-background_770606-1086.jpg',
    stock: 40,
    is_active: 1,
  },
  {
    id: 16,
    name_ru: 'Ананас',
    name_uz: 'Ananas',
    category: 0,
    is_global: true,
    description: 'Сочный ананас',
    price: 32000,
    unit: 'кг',
    image_url: 'https://img.freepik.com/premium-photo/juicy-ripe-pineapple-white-background_320146-62.jpg',
    stock: 35,
    is_active: 1,
  },
];

export default function FruitsProductsSection({ selectedFilter }) {
  const { locale } = useLocale();

  // Фильтруем продукты: только фрукты (category === 0) и по выбранному фильтру
  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      // Только фрукты
      if (product.category !== 0) return false;
      
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
                <img
                  src={product.image_url}
                  alt={getName(product)}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
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

