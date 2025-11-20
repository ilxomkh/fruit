import { useState } from 'react';
import { X } from 'lucide-react';
import { useLocale } from '../i18n.jsx';

export default function ApplicationModal({ isOpen, onClose }) {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
    // Закрываем модалку после отправки
    onClose();
    // Сброс формы
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-600 transition-colors hover:text-slate-900"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Title */}
        <h2 className="mb-6 text-2xl font-bold text-[#0b2c3c] sm:text-3xl">
          {t.cta.form.title}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t.cta.form.name}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t.cta.form.email}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t.cta.form.phone}
              className="w-full appearance-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white"
              required
            />
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t.cta.form.message}
              rows={4}
              className="w-full appearance-none resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3.5 text-base text-slate-900 placeholder-slate-400 transition-all duration-200 focus:border-[#e31837] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#e31837]/10 hover:border-slate-300 hover:bg-white [&::-webkit-resizer]:hidden"
              required
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#e31837] px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-md shadow-[#e31837]/20 transition-all duration-200 hover:bg-[#c91531] hover:shadow-lg hover:shadow-[#e31837]/30 focus:outline-none focus:ring-2 focus:ring-[#e31837]/50 active:scale-[0.98]"
          >
            {t.cta.form.submit}
          </button>
        </form>
      </div>
    </div>
  );
}

