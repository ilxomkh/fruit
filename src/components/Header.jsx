import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { useLocale } from '../i18n.jsx';
import logo from '../assets/logo.svg';

const languages = [
  { code: 'uz', label: 'UZ' },
  { code: 'ru', label: 'RU' },
];

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const location = useLocation();
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
    url: idx === 0 ? '/' : idx === 1 ? '/aboutus' : idx === 3 ? '/export' : idx === 4 ? '/import' : idx === 5 ? '/contact' : null,
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
    hoverTimeout.current = setTimeout(() => setProductsOpen(false), 200);
  };

  const NavLinks = ({ className, onSelect, variant = 'desktop' }) => (
    <div className={className}>
      {navigation.map((item, idx) => {
        const isActive = idx === 0 
          ? location.pathname === '/' 
          : idx === 2 
          ? location.pathname === '/products' || location.pathname.startsWith('/products/')
          : location.pathname === item.url;
        const base =
          'flex items-center justify-center gap-2 rounded-full px-3.5 py-2 transition text-[12px] font-semibold uppercase tracking-[0.18em]';
        const inactive = 'text-[#0b1c2c] hover:text-[#02101d] bg-white/70';
        const active = 'text-white bg-[#f12f49] shadow-[0_6px_18px_rgba(241,47,73,0.35)]';

        if (item.hasDropdown && variant === 'desktop') {
          const productsLink = location.pathname === '/' ? '/#products' : '/products';
          return (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={openProducts}
              onMouseLeave={closeProductsWithDelay}
            >
              <Link
                to={productsLink}
                onClick={() => {
                  onSelect?.();
                  setProductsOpen(false);
                }}
                ref={productTriggerRef}
                className={`${base} ${isActive ? active : inactive}`}
              >
                {item.label}
                <ChevronUp className={`h-3 w-3 transition-transform duration-300 ease-out ${productsOpen ? 'rotate-0' : 'rotate-180'}`} />
              </Link>
              <div
                style={{ width: productMenuWidth ? `${productMenuWidth}px` : undefined }}
                className={`absolute left-1/2 top-full z-30 mt-2.5 -translate-x-1/2 rounded-2xl bg-white/10 backdrop-blur-sm p-2 shadow-[0_20px_60px_rgba(0,0,0,0.3)] ring-1 ring-slate-300/80 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col gap-2 ${
                  productsOpen
                    ? 'pointer-events-auto opacity-100 translate-y-0 scale-100'
                    : 'pointer-events-none opacity-0 -translate-y-2 scale-[0.95]'
                }`}
              >
                {productLinks.map((link, linkIdx) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => {
                      onSelect?.();
                      setProductsOpen(false);
                    }}
                    className="group relative flex items-center justify-center rounded-xl px-4 py-2.5  text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0b1c2c] bg-white/70 transition-all duration-300 ease-out hover:bg-[#f12f49] hover:text-white hover:shadow-[0_4px_12px_rgba(241,47,73,0.25)]"
                    style={{
                      animationDelay: productsOpen ? `${linkIdx * 50}ms` : '0ms',
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      {link.label}
                    </span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f12f49] to-[#e31837] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
                className={`flex flex-col gap-2 overflow-hidden pl-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  productsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                }`}
              >
                {productLinks.map((link, linkIdx) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    onClick={() => {
                      onSelect?.();
                      setProductsOpen(false);
                    }}
                    className={`group relative flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-left text-[12px] font-semibold uppercase tracking-[0.18em] text-[#0b1c2c] transition-all duration-300 ease-out ${
                      productsOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                    } hover:bg-[#f12f49] hover:text-white hover:shadow-[0_4px_12px_rgba(241,47,73,0.25)]`}
                    style={{
                      transitionDelay: productsOpen ? `${linkIdx * 50}ms` : '0ms',
                    }}
                  >
                    <span className="relative z-10 transition-transform duration-300 group-hover:scale-105">
                      {link.label}
                    </span>
                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#f12f49] to-[#e31837] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
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
              <div className="flex items-center justify-center">
                <img src={logo} alt="Fruit UI" className="h-12 w-12" />
              </div>
            </div>

            <NavLinks className="hidden items-center gap-3 lg:flex" variant="desktop" />

            <div className="flex items-center gap-2">
              <LanguageToggle className="inline-flex shrink-0 lg:hidden" />
              <LanguageToggle className="hidden shrink-0 lg:inline-flex" />
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/50 bg-white/80 text-[16px] font-semibold text-[#0b1c2c] backdrop-blur-md transition hover:border-white lg:hidden"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle navigation"
              >
                ☰
              </button>
            </div>
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
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

