import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';

export default function FruitsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <div className="relative flex-1">
        <Header />
        <div className="flex min-h-screen flex-col items-center justify-center px-6 pt-32 text-center text-slate-900">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.6em] text-slate-500">Products</p>
            <h1 className="mt-6 text-4xl font-bold">Fruits catalog coming soon</h1>
            <p className="mt-4 text-base text-slate-600">
              Здесь появится подборка свежих фруктов. Пока мы готовим раздел, вы можете вернуться на главную и оформить
              запрос через менеджера.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

