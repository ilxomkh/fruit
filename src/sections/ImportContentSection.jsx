import { useLocale } from '../i18n.jsx';
import orangeImage from '../assets/orange.png';

export default function ImportContentSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Вводный параграф */}
        <div className="mx-auto mb-12 max-w-7xl sm:mb-16">
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
            {t.import?.intro?.split(/(Fruit Exim)/).map((part, index) => 
              part === 'Fruit Exim' ? (
                <span key={index} className="font-bold">{part}</span>
              ) : (
                <span key={index}>{part}</span>
              )
            )}
          </p>
        </div>

        {/* Две колонки: Текст слева, Изображение справа */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка: Текст */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.import?.assortment?.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.import?.assortment?.description}
            </p>
            <ul className="mb-6 space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  {t.import?.assortment?.fruits?.split(':').map((part, index) => 
                    index === 0 ? (
                      <span key={index} className="font-bold">{part}:</span>
                    ) : (
                      <span key={index}>{part}</span>
                    )
                  )}
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  {t.import?.assortment?.vegetables?.split(':').map((part, index) => 
                    index === 0 ? (
                      <span key={index} className="font-bold">{part}:</span>
                    ) : (
                      <span key={index}>{part}</span>
                    )
                  )}
                </span>
              </li>
            </ul>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.import?.assortment?.conclusion}
            </p>
          </div>

          {/* Правая колонка: Изображение */}
          <div className="flex items-center justify-center">
            <img
              src={orangeImage}
              alt={t.import?.assortment?.title || 'Импортируемые фрукты и овощи'}
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

