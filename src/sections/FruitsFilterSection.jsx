import { useLocale } from '../i18n.jsx';

export default function FruitsFilterSection({ selectedFilter, setSelectedFilter }) {
  const { t } = useLocale();

  const filters = [
    { id: 'uzbekistan', label: t.products?.filters?.uzbekistan || 'УЗБЕКИСТАН' },
    { id: 'global', label: t.products?.filters?.global || 'ГЛОБАЛЬ' },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex justify-center">
          <div className="flex w-full max-w-7xl gap-4">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`
                    px-6 py-3 w-full text-sm font-semibold uppercase tracking-wider transition-all
                    sm:px-8 sm:py-3.5 sm:text-base
                    ${isActive
                      ? 'bg-[#f12f49] text-white'
                      : 'bg-white border-2 border-[#f12f49] text-slate-800 hover:bg-slate-50'
                    }
                  `}
                  style={{ borderRadius: '6px' }}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

