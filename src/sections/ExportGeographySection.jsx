import { useLocale } from '../i18n.jsx';
import truckImage from '../assets/truck.png';

export default function ExportGeographySection() {
  const { t } = useLocale();

  return (
    <section className="w-full bg-white py-10 sm:py-10 lg:py-10">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Две колонки: Текст слева, Изображение справа */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка: Текст */}
          <div className="flex flex-col justify-center">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 sm:text-3xl lg:text-4xl">
              {t.export?.geography?.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
              {t.export?.geography?.description}
            </p>
          </div>

          {/* Правая колонка: Изображение */}
          <div className="flex items-center justify-center">
            <img
              src={truckImage}
              alt={t.export?.geography?.title || 'География поставок'}
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

