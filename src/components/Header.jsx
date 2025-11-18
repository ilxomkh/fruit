import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, ChevronRightIcon } from 'lucide-react';
import { useLocale } from '../i18n.jsx';
import logo from '../assets/logo.svg';

const languages = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
];

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [productMenuWidth, setProductMenuWidth] = useState(null);
  const productTriggerRef = useRef(null);
  const hoverTimeout = useRef(null);

  const productLinks = [
    { label: t.products?.cards?.fruits?.title || 'Fruits', to: '/products/fruits' },
    { label: t.products?.cards?.vegetables?.title || 'Vegetables', to: '/products/vegetables' },
  ];

  const toggleLocale = (code) => {
    setLocale(code);
    setMenuOpen(false);
  };

  const navigation = t.navigation.map((item, idx) => ({
    label: item,
    featured: idx === 0,
    hasDropdown: idx === 2,
    url: idx === 0 ? '/' : idx === 1 ? '/aboutus' : null,
  }));

  useEffect(() => {
    const updateWidth = () => {
      if (productTriggerRef.current) {
        setProductMenuWidth(productTriggerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (hoverTimeout.current) {
        clearTimeout(hoverTimeout.current);
      }
    };
  }, []);

  const openProducts = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    setProductsOpen(true);
  };

  const closeProductsWithDelay = () => {
    if (hoverTimeout.current) {
      clearTimeout(hoverTimeout.current);
    }
    hoverTimeout.current = setTimeout(() => setProductsOpen(false), 350);
  };

  const NavLinks = ({ className, onSelect, variant = 'desktop' }) => (
    <div className={className}>
      {navigation.map((item, idx) => {
        const isActive = idx === 0;
        const base =
          'flex items-center justify-center gap-2 rounded-full px-3.5 py-2 transition text-[12px] font-semibold uppercase tracking-[0.18em]';
        const inactive = 'text-[#0b1c2c] hover:text-[#02101d] bg-white/70';
        const active = 'text-white bg-[#f12f49] shadow-[0_6px_18px_rgba(241,47,73,0.35)]';

        if (item.hasDropdown && variant === 'desktop') {
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={openProducts}
              onMouseLeave={closeProductsWithDelay}
            >
              <Link
                to="/#products"
                onClick={() => {
                  onSelect?.();
                  setProductsOpen(false);
                }}
                ref={productTriggerRef}
                className={`${base} ${isActive ? active : inactive}`}
              >
                {item.label}
                <ChevronUp className={`h-3 w-3 transition-transform ${productsOpen ? '' : 'rotate-180'}`} />
              </Link>
              <div
                style={{ width: productMenuWidth ? `${productMenuWidth}px` : undefined }}
                className={`absolute left-1/2 top-full z-30 mt-2 -translate-x-1/2 rounded-xl bg-white/95 p-3 shadow-[0_12px_36px_rgba(11,44,60,0.12)] ring-1 ring-slate-200 transition-all duration-300 ease-out ${
                  productsOpen
                    ? 'pointer-events-auto opacity-100 translate-y-0 scale-100'
                    : 'pointer-events-none opacity-0 -translate-y-1 scale-[0.97]'
                }`}
              >
                {productLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => {
                      onSelect?.();
                      setProductsOpen(false);
                    }}
                    className="flex items-center justify-between rounded-full px-3.5 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0b1c2c] transition hover:bg-white/80"
                  >
                    {link.label}
                    <ChevronRightIcon className="h-3 w-3 text-[#e31837]" />
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        if (item.hasDropdown && variant === 'mobile') {
          return (
            <div key={item.label} className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => setProductsOpen((prev) => !prev)}
                className={`${base} ${isActive ? active : inactive}`}
              >
                {item.label}
                <ChevronUp className={`h-3.5 w-3.5 transition-transform ${productsOpen ? '' : 'rotate-180'}`} />
              </button>
              <div
                className={`flex flex-col gap-2 overflow-hidden pl-2 transition-all duration-300 ease-out ${
                  productsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {productLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => {
                      onSelect?.();
                      setProductsOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-full bg-white/80 px-3.5 py-2 text-left text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0b1c2c] transition duration-300 ease-out transform ${
                      productsOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

        if (item.url) {
          return (
            <Link
              key={item.label}
              to={item.url}
              onClick={() => onSelect?.()}
              className={`${base} ${isActive ? active : inactive}`}
            >
              {item.label}
              {item.hasDropdown && <span className="text-xs">▾</span>}
            </Link>
          );
        }

        return (
          <button
            key={item.label}
            type="button"
            onClick={() => onSelect?.()}
            className={`${base} ${isActive ? active : inactive}`}
          >
            {item.label}
            {item.hasDropdown && <span className="text-xs">▾</span>}
          </button>
        );
      })}
    </div>
  );

  const LanguageToggle = ({ className }) => {
    const nextLocale = locale === 'ru' ? 'uz' : 'ru';
    return (
      <button
        className={`${className} inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-[10px] font-bold tracking-[0.25em] text-[#0b1c2c] backdrop-blur-md transition hover:border-white`}
        onClick={() => toggleLocale(nextLocale)}
        aria-label="Toggle language"
      >
        {locale.toUpperCase()}
      </button>
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 py-4">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-shell glass-shell--nav">
          <div className="glass-filter" />
          <div className="glass-specular" />
          <nav className="glass-content flex flex-nowrap items-center justify-between gap-4 px-5 py-3 text-white lg:px-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-lg shadow-slate-900/40">
                <img src={logo} alt="Fruit UI" className="h-9 w-9" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white">
                Fruit UI
              </span>
            </div>

            <NavLinks className="hidden items-center gap-3 lg:flex" variant="desktop" />

            <LanguageToggle className="hidden shrink-0 lg:inline-flex" />

            <button
              className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 text-sm text-white/90 backdrop-blur-xl transition hover:border-white/60 lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              ☰
            </button>
          </nav>
        </div>

        {menuOpen && (
          <div className="glass-shell mt-4 lg:hidden backdrop-blur-sm">
            <div className="glass-filter" />
            <div className="glass-specular" />
            <div className="glass-content flex flex-col gap-6 px-6 py-6 text-white">
              <NavLinks
                className="flex flex-col gap-4 text-center text-lg font-semibold"
                onSelect={() => setMenuOpen(false)}
                variant="mobile"
              />
              <LanguageToggle className="mx-auto inline-flex" />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

