import Header from '../components/Header.jsx';
import { useLocale } from '../i18n.jsx';
import heroPhoto from '../assets/fruit.jpg';

export default function HeroSection() {
  const { t } = useLocale();
  return (
    <section className="relative w-full">
      <img
        src={heroPhoto}
        alt="Свежие фрукты и овощи"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#113047]/75" />
      <Header />
      <div className="relative z-10 mx-auto flex min-h-[640px] w-full max-w-7xl flex-col items-center justify-center px-6 pb-20 pt-40 text-center text-white sm:px-12 lg:px-20">
        <h1 className="mt-24 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-[72px] lg:leading-tight">
          {t.hero.title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg">{t.hero.subtitle}</p>
      </div>
    </section>
  );
}

