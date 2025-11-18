import { useLocale } from '../i18n.jsx';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-[#f5f7f9] py-10">
      <div className="mx-auto w-full max-w-7xl px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="mt-4 text-4xl font-bold text-[#0b2c3c] sm:text-5xl">{t.about.title}</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#103347] sm:text-xl">
            <span className="font-semibold text-[#0b2c3c]">{t.about.highlight}</span> {t.about.description}
          </p>
          <Link
            to="/aboutus"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#e31837] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white hover:bg-[#c91531] transition-colors duration-300"
          >
            {t.about.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}

