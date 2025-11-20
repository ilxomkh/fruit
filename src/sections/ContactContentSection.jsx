import { useState } from 'react';
import { Phone, Mail, MapPin, FileText } from 'lucide-react';
import { useLocale } from '../i18n.jsx';

export default function ContactContentSection() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику отправки формы
    console.log('Form submitted:', formData);
    // Сброс формы
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Левая колонка: Контактная информация */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e31837] text-white">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0b2c3c] sm:text-xl">
                  {t.contact?.info?.phoneLabel || 'Телефон'}
                </h3>
                <a
                  href="tel:+998944466888"
                  className="mt-1 block text-base text-[#173347] transition-colors hover:text-[#e31837] sm:text-lg"
                >
                  {t.contact?.info?.phone || '+998 94 446 68 88'}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e31837] text-white">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0b2c3c] sm:text-xl">
                  {t.contact?.info?.emailLabel || 'Эл. почта'}
                </h3>
                <a
                  href="mailto:info@fruitexim.com"
                  className="mt-1 block text-base text-[#173347] transition-colors hover:text-[#e31837] sm:text-lg"
                >
                  {t.contact?.info?.email || 'info@fruitexim.com'}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#e31837] text-white">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#0b2c3c] sm:text-xl">
                  {t.contact?.info?.addressLabel || 'Адрес'}
                </h3>
                <p className="mt-1 text-base leading-relaxed text-[#173347] sm:text-lg">
                  {t.contact?.info?.address ||
                    'Узбекистан, Навоийская область, Карманинский район, махалля Варк, улица Варк, дом 838'}
                </p>
              </div>
            </div>
          </div>

          {/* Правая колонка: Контактная форма */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e31837] text-white">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold text-[#0b2c3c] sm:text-3xl lg:text-4xl">
                {t.contact?.form?.title || 'Контактная форма'}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Имя */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.name || 'Ваше имя'}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.email || 'Электронная почта'}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white"
                  required
                />
              </div>

              {/* Тема */}
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.subject || 'Тема'}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white"
                  required
                />
              </div>

              {/* Сообщение */}
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact?.form?.message || 'Сообщение'}
                  rows={4}
                  className="w-full appearance-none resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white [&::-webkit-resizer]:hidden"
                  required
                />
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="w-full rounded-lg bg-[#e31837] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-[#e31837]/20 transition-all duration-200 hover:bg-[#c91531] hover:shadow-lg hover:shadow-[#e31837]/30 focus:outline-none focus:ring-2 focus:ring-[#e31837]/50 active:scale-[0.98]"
              >
                {t.contact?.form?.submit || 'ОТПРАВИТЬ'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

