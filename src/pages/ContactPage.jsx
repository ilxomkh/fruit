import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="relative flex-1">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center text-slate-900">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Contact</p>
            <h1 className="mt-6 text-4xl font-bold">Оставить заявку</h1>
            <p className="mt-4 text-base text-slate-600">
              Страница в разработке. Свяжитесь с нами любым удобным способом.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

