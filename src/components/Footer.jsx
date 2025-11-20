import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocale } from '../i18n.jsx';

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com/fruitexim', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/fruitexim', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

export default function Footer() {
  const { t } = useLocale();
  const currentYear = new Date().getFullYear();

  const infoLinks = [
    { label: t.footer?.links?.aboutUs || 'About Us', to: '/aboutus' },
    { label: t.footer?.links?.products || 'Products', to: '/products/fruits' },
    { label: t.footer?.links?.export || 'Export', to: '/export' },
    { label: t.footer?.links?.import || 'Import', to: '/products/vegetables' },
    { label: t.footer?.links?.contacts || 'Contacts', to: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#012b3a] via-[#011f2a] to-[#00151d] text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#f12f49] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#f12f49] rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#f12f49]">
              {t.footer?.socialMedia || 'Social Media'}
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              {t.footer?.socialMediaDescription || 'Follow us for news and updates'}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="group flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white/80 transition-all duration-300 hover:border-[#f12f49] hover:bg-[#f12f49]/20 hover:text-white hover:scale-110 hover:shadow-lg hover:shadow-[#f12f49]/30"
                >
                  <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Information Links Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#f12f49]">
              {t.footer?.information || 'Information'}
            </h3>
            <nav>
              <ul className="space-y-3">
                {infoLinks.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group flex items-center text-sm text-white/70 transition-all duration-300 hover:text-white hover:translate-x-1"
                    >
                      <span className="mr-2 text-[#f12f49] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:mr-3">
                        →
                      </span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contacts Section */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-[#f12f49]">
              {t.footer?.contacts || 'Contacts'}
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f12f49]/20 text-[#f12f49]">
                  <MapPin className="h-4 w-4" />
                </div>
                <p className="text-sm leading-relaxed text-white/70">
                  {t.footer?.address || '838, Vark Street, Vark Neighborhood, Navoi Region, Uzbekistan'}
                </p>
              </div>
              
              <a
                href="tel:+998944466888"
                className="group flex items-center gap-3 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f12f49]/20 text-[#f12f49] transition-all duration-300 group-hover:bg-[#f12f49]/30">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  +998 94 446 68 88
                </span>
              </a>
              
              <a
                href="mailto:info@fruitexim.com"
                className="group flex items-center gap-3 text-sm text-white/70 transition-all duration-300 hover:text-white"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f12f49]/20 text-[#f12f49] transition-all duration-300 group-hover:bg-[#f12f49]/30">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  info@fruitexim.com
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/60">
              {t.footer?.copyright?.replace('{year}', currentYear) || `© ${currentYear} Fruit Exim. All rights reserved.`}
            </p>
            <Link
              to="/privacy"
              className="text-xs text-white/60 transition-all duration-300 hover:text-white hover:underline underline-offset-4"
            >
              {t.footer?.privacyPolicy || 'Privacy Policy'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
