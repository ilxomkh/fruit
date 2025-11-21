import { useState } from 'react';
import { useLocale } from '../i18n.jsx';
import ApplicationModal from '../components/ApplicationModal.jsx';

export default function FruitsCallToAction() {
  const { t } = useLocale();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#f5f7f9] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-7xl px-6 text-center sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-[#0b2c3c] sm:text-4xl lg:text-5xl">
              {t.products?.cta?.title || 'Получите лучшее предложение'}
            </h2>
            <p className="mt-5 text-base text-[#173347] sm:text-lg lg:text-xl">
              {t.products?.cta?.description || 'Оставьте заявку для получения предложения, и мы свяжемся с вами в ближайшее время.'}
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#f12f49] px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-300 hover:bg-[#e31837] sm:px-10 sm:py-4 sm:text-base"
            >
              {t.products?.cta?.button || 'ОСТАВИТЬ ЗАЯВКУ'}
            </button>
          </div>
        </div>
      </section>
      <ApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

