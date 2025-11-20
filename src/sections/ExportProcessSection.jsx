import { useLocale } from '../i18n.jsx';
import peachImage from '../assets/peach2.png';

export default function ExportProcessSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Две колонки: Изображение слева, Текст справа */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка: Изображение */}
          <div className="flex items-start justify-center lg:order-1">
            <img
              src={peachImage}
              alt={t.export?.process?.title || 'Экспорт'}
              className="max-w-full rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Правая колонка: Текст */}
          <div className="flex flex-col lg:order-2">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.export?.process?.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.export?.process?.intro}
            </p>
            <ul className="mb-6 space-y-4">
              {t.export?.process?.steps?.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                  <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                    <strong className="font-semibold">{step.title}</strong> {step.description}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.export?.process?.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

