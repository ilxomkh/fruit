import { useLocale } from '../i18n.jsx';
import fruitImage from '../assets/peach.webp';

export default function ExportContentSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Вводный параграф */}
        <div className="mx-auto mb-12 max-w-7xl sm:mb-16">
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg lg:text-xl">
            {t.export?.intro?.split(/(Fruit Exim)/).map((part, index) => 
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
              {t.export?.assortment?.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.export?.assortment?.description}
            </p>
            <ul className="mb-6 space-y-4">
              <li className="flex items-start">
                <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                  {t.export?.assortment?.fruits?.split(':').map((part, index) => 
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
                  {t.export?.assortment?.vegetables?.split(':').map((part, index) => 
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
              {t.export?.assortment?.conclusion}
            </p>
          </div>

          {/* Правая колонка: Изображение */}
          <div className="flex items-center justify-center">
            <img
              src={fruitImage}
              alt={t.export?.assortment?.title || 'Фрукты и овощи'}
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

