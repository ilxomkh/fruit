import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { useLocale } from '../i18n.jsx';
import avLogo from '../assets/Av_2021_logo.svg';
import dobromLogo from '../assets/dobronom.png';
import evrooptLogo from '../assets/evroopt.svg';
import magnitLogo from '../assets/magnit.png';
import mariyaLogo from '../assets/mariya.webp';
import perekrestokLogo from '../assets/perekrestok.png';
import pokupochkaLogo from '../assets/pokupochka.png';
import pyaterochkaLogo from '../assets/pyaterochka.png';
import samokatLogo from '../assets/samokat.png';
import santaLogo from '../assets/santa.svg';
import sosediLogo from '../assets/sosedi.png';
import x5Logo from '../assets/X5Group.svg';
import { ChevronLeftIcon } from 'lucide-react';
import { ChevronRightIcon } from 'lucide-react';

const logos = [
  { src: x5Logo, alt: 'X5 Group' },
  { src: avLogo, alt: 'Азбука вкуса' },
  { src: samokatLogo, alt: 'Самокат' },
  { src: magnitLogo, alt: 'Магнит' },
  { src: pyaterochkaLogo, alt: 'Пятёрочка' },
  { src: perekrestokLogo, alt: 'Перекрёсток' },
  { src: evrooptLogo, alt: 'Евроопт' },
  { src: dobromLogo, alt: 'ДоброНом' },
  { src: mariyaLogo, alt: 'Мария-Ра' },
  { src: pokupochkaLogo, alt: 'Покупочка' },
  { src: sosediLogo, alt: 'Соседи' },
  { src: santaLogo, alt: 'Санта' },
];

const AUTOPLAY_DELAY = 4000;

const Autoplay = (delay = AUTOPLAY_DELAY) => (slider) => {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, delay);
  }

  slider.on('created', () => {
    slider.container.addEventListener('mouseover', () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener('mouseout', () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on('dragStarted', clearNextTimeout);
  slider.on('animationEnded', nextTimeout);
  slider.on('updated', nextTimeout);
};

export default function ClientsCarousel() {
  const { t } = useLocale();
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      renderMode: 'performance',
      slides: {
        perView: 4,
        spacing: 16,
      },
      breakpoints: {
        '(max-width: 1024px)': {
          slides: {
            perView: 2.2,
            spacing: 20,
          },
        },
        '(max-width: 640px)': {
          slides: {
            perView: 2,
            spacing: 8,
          },
        },
      },
    },
    [Autoplay()]
  );

  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-[#0b2c3c] sm:text-5xl lg:text-[52px]">{t.clients.title}</h2>
        <p className="mx-auto mt-5 max-w-4xl text-lg text-[#173347] sm:text-xl">{t.clients.subtitle}</p>

        <div className="relative mt-16 flex items-center gap-6">
          <button
            onClick={() => slider?.current?.prev()}
            className="rounded-full text-slate-600 transition hover:border-slate-400 hover:text-slate-900"
            aria-label="Предыдущие клиенты"
          >
            <ChevronLeftIcon className="h-8 w-8" />
          </button>
          <div className="w-full overflow-hidden px-4 py-8 sm:px-10 lg:px-12 lg:py-10">
            <div ref={sliderRef} className="keen-slider">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="keen-slider__slide flex items-center justify-center"
                  aria-label={logo.alt}
                >
                  <div className="flex h-24 w-36 items-center justify-center rounded-2xl bg-white/90 p-4 sm:h-28 sm:w-40 sm:p-5 lg:h-32 lg:w-48 lg:p-6">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 w-28 object-contain sm:h-16 sm:w-32 lg:h-20 lg:w-36"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={() => slider?.current?.next()}
            className="rounded-full  p-2 text-slate-600  transition hover:border-slate-400 hover:text-slate-900"
            aria-label="Следующие клиенты"
          >
            <ChevronRightIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}

