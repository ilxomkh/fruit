import Header from '../components/Header.jsx';
import { useLocale } from '../i18n.jsx';
import importPhoto from '../assets/import.png';

export default function ImportHeroSection() {
  const { t } = useLocale();
  return (
    <section className="relative w-full">
      <img
        src={importPhoto}
        alt={t.import?.hero?.title || 'Импорт'}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#113047]/75" />
      <Header />
      <div className="relative z-10 mx-auto flex min-h-[35vh] w-full max-w-7xl flex-col items-center justify-center px-6 py-14 text-center text-white sm:min-h-[45vh] sm:px-12 lg:px-20">
        <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-[72px] lg:leading-tight">
          {t.import?.hero?.title || 'Импорт'}
        </h1>
      </div>
    </section>
  );
}

