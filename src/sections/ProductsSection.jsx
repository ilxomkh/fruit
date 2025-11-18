import { Link } from 'react-router-dom';
import { useLocale } from '../i18n.jsx';
import fruitCard from '../assets/fruitcard.jpg';
import vegCard from '../assets/vagcard.jpg';
import { ChevronRightIcon } from 'lucide-react';

const cardsConfig = [
  {
    key: 'fruits',
    image: fruitCard,
    link: '/products/fruits',
    gradient: 'from-black/60 via-black/30 to-transparent',
  },
  {
    key: 'vegetables',
    image: vegCard,
    link: '/products/vegetables',
    gradient: 'from-black/60 via-black/30 to-transparent',
  },
];

export default function ProductsSection() {
  const { t } = useLocale();

  return (
    <section id="products" className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-7xl px-6 text-center lg:px-10">
        <h2 className="text-4xl font-bold text-[#0b2c3c] sm:text-5xl">{t.products.title}</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base text-[#173347] sm:text-lg">{t.products.subtitle}</p>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {cardsConfig.map((card) => {
            const copy = t.products.cards[card.key];
            return (
              <Link
                to={card.link}
                key={card.key}
                className="group relative block overflow-hidden rounded-[32px] hover:-translate-y-0.5 transition-all duration-300"
              >
                <img src={card.image} alt={copy.title} className="h-full w-full object-cover" loading="lazy" />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${card.gradient} transition group-hover:bg-black/40`}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-left text-white">
                  <h3 className="text-3xl font-semibold">{copy.title}</h3>
                  <p className="mt-3 text-base text-white/90">{copy.description}</p>
                  <button className="mt-6 w-40 flex items-center justify-center gap-2 rounded-lg bg-[#e31837] py-2 text-sm font-semibold uppercase tracking-[0.2em] transition group-hover:bg-[#c91531]">
                    {copy.cta}
                    <span><ChevronRightIcon/></span>
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

