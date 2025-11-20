import Header from '../components/Header.jsx';
import { useLocale } from '../i18n.jsx';
import heroPhoto from '../assets/fruit.jpg';

export default function HeroSection() {
  const { t } = useLocale();
  const titleLines = t.hero?.titleLines?.length ? t.hero.titleLines : [t.hero.title];
  return (
    <section className="relative w-full min-h-screen">
      <img
        src={heroPhoto}
        alt="Свежие фрукты и овощи"
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#113047]/75" />
      <Header />
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 pb-24 pt-32 text-center text-white sm:px-8 lg:px-12">
        <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
          {titleLines.map((line, idx) => (
            <span key={idx} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-white/90 sm:text-xl">{t.hero.subtitle}</p>
      </div>
    </section>
  );
}

