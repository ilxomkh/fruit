import { useLocale } from '../i18n.jsx';
import leafIcon from '../assets/Container.svg';

export default function WhyChooseUs() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-[#f5f7f9] py-10">
      <div className="mx-auto w-full max-w-7xl px-6 text-center lg:px-10">
        <h2 className="text-4xl font-bold text-[#0b2c3c] sm:text-5xl">{t.why.title}</h2>
        <div className="mt-14 grid gap-10 text-left sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item) => (
            <div key={item.title} className="flex flex-col gap-4 rounded-3xl p-6 bg-white/90">
              <img src={leafIcon} alt="" className="h-10 w-10" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold text-[#103347]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#294b5b]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

