import { useLocale } from '../i18n.jsx';

export default function AboutContentSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Вводный параграф */}
        <div className="mx-auto max-w-7xl mb-10 sm:mb-10">
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
            {t.about.intro}
          </p>
        </div>

        {/* Две колонки: Что делает нас особенными и Наши ценности */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 mb-16 sm:mb-20">
          {/* Левая колонка: Что делает нас особенными */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.about.special.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.about.special.description}
            </p>
            <h3 className="mb-4 text-lg font-semibold text-slate-900 sm:text-xl">
              {t.about.special.servicesTitle}
            </h3>
            <ul className="space-y-3">
              {t.about.special.services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-[0.35em] flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                  <span className="text-base leading-relaxed text-slate-700 sm:text-lg">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Правая колонка: Наши ценности и принципы */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.about.values.title}
            </h2>
            <div className="space-y-6">
              {t.about.values.items.map((value, index) => (
                <div key={index}>
                  <h3 className="mb-2 text-base font-bold text-slate-900 sm:text-lg">
                    {value.title}
                  </h3>
                  <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Нижние две колонки: Миссия и Команда */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Левая колонка: Наша миссия и цель */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.about.mission.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.about.mission.description}
            </p>
          </div>

          {/* Правая колонка: Наша команда */}
          <div>
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.about.team.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.about.team.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

