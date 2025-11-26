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
    <section id="products" className="w-full bg-white py-10 pb-20">
      <div className="mx-auto w-full max-w-7xl px-6 text-center lg:px-10">
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {cardsConfig.map((card) => {
            const copy = t.products.cards[card.key];
            return (
              <Link
                to={card.link}
                key={card.key}
                className="products-card group relative block overflow-hidden rounded-[32px] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 hover:scale-[1.01] active:scale-[0.995]"
              >
                <img
                  src={card.image}
                  alt={copy.title}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-125"
                  loading="lazy"
                />
                <div className="products-card-mask absolute inset-0" />
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-left text-white">
                  <h3 className="text-3xl font-semibold">{copy.title}</h3>
                  <p className="mt-3 text-base text-white/90">{copy.description}</p>
                  <button className="mt-6 w-40 flex items-center justify-center gap-2 rounded-2xl bg-[#e31837] py-2 text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 group-hover:bg-[#c91531] group-hover:tracking-[0.25em]">
                    {copy.cta}
                    <span>
                      <ChevronRightIcon className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
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

