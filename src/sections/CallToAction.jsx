import { useLocale } from '../i18n.jsx';
import { Link } from 'react-router-dom';

export default function CallToAction() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-[#f5f7f9] py-10">
      <div className="mx-auto w-full max-w-7xl px-6 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-[#0b2c3c] sm:text-5xl">{t.cta.title}</h2>
          <p className="mt-5 text-lg text-[#173347] sm:text-xl">{t.cta.description}</p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#e31837] px-10 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#c91531]"
          >
            {t.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}

