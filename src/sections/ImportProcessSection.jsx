import { useLocale } from '../i18n.jsx';
import packImage from '../assets/packimport.png';

export default function ImportProcessSection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Две колонки: Изображение слева, Текст справа */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка: Изображение */}
          <div className="flex items-start justify-center lg:order-1">
            <img
              src={packImage}
              alt={t.import?.process?.title || 'Импорт'}
              className="max-w-full rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Правая колонка: Текст */}
          <div className="flex flex-col lg:order-2">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.import?.process?.title}
            </h2>
            <p className="mb-6 text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.import?.process?.intro}
            </p>
            <ul className="mb-6 space-y-4">
              {t.import?.process?.steps?.map((step, index) => {
                // Разделяем текст на жирную часть и обычную по определенным словам-разделителям
                const separators = ['согласно', 'на', 'для', 'по', 'и'];
                let splitIndex = -1;
                let separator = '';
                
                for (const sep of separators) {
                  const regex = new RegExp(`\\s${sep}\\s`);
                  const match = step.match(regex);
                  if (match && match.index !== undefined) {
                    splitIndex = match.index;
                    separator = match[0];
                    break;
                  }
                }
                
                if (splitIndex !== -1) {
                  const boldPart = step.substring(0, splitIndex);
                  const normalPart = separator + step.substring(splitIndex + separator.length);
                  return (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                      <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                        <span className="font-bold">{boldPart}</span>
                        <span>{normalPart}</span>
                      </span>
                    </li>
                  );
                }
                
                // Если разделитель не найден, весь текст обычный
                return (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 mt-2.5 flex h-2 w-2 shrink-0 rounded-full bg-[#f12f49]" />
                    <span className="text-base leading-relaxed text-slate-700 sm:text-lg">
                      {step}
                    </span>
                  </li>
                );
              })}
            </ul>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.import?.process?.conclusion}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

