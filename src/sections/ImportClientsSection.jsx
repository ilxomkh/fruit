import { useLocale } from '../i18n.jsx';
import truckImage from '../assets/truckimport.png';

export default function ImportClientsSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Две колонки: Текст слева, Изображение справа */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка: Текст */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.import?.clients?.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.import?.clients?.subtitle}
            </p>
            <ul className="mb-6 space-y-4">
              {t.import?.clients?.list?.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                  <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.import?.clients?.conclusion}
            </p>
          </div>

          {/* Правая колонка: Изображение */}
          <div className="flex items-center justify-center">
            <img
              src={truckImage}
              alt={t.import?.clients?.title || 'Наши клиенты'}
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

