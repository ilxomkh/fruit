import { createContext, useContext, useMemo, useState } from 'react';

export const locales = {
  ru: {
    locale: 'ru',
    navigation: ['Главная', 'О нас', 'Продукция', 'Экспорт', 'Импорт', 'Контакты'],
    hero: {
      kicker: 'свежие поставки',
      title: 'Свежесть. Натуральность. Качество.',
      subtitle:
        'Мы поставляем свежие фрукты и овощи, выращенные в экологичных условиях и в полном соответствии со стандартами качества.',
      ctaPrimary: 'Каталог',
      ctaSecondary: 'Связаться',
    },
    cards: [
      { name: 'Манго Атульфо', description: 'Солнечный экспорт из Узбекистана', color: 'bg-orange-400' },
      { name: 'Черника', description: 'Премиальные ягоды фермеров Ферганы', color: 'bg-indigo-500' },
      { name: 'Киви Хейворд', description: 'Калиброванный import-ready урожай', color: 'bg-emerald-500' },
      { name: 'Драгонфрут', description: 'Экзотика для HoReCa сегмента', color: 'bg-rose-500' },
    ],
    about: {
      kicker: 'о компании',
      title: 'О нас',
      highlight: 'Fruit Exim',
      description:
        '— динамично развивающаяся экспортно-импортная компания в Узбекистане, специализирующаяся на поставках натуральных и первоклассных свежих фруктов и овощей.',
      subtitle: 'Мы выстраиваем надежные цепочки поставок и гарантируем свежесть каждого продукта.',
      cta: 'Узнать больше',
    },
    products: {
      title: 'Наши продукты',
      subtitle:
        'Выбирая нас, вы получаете не только вкусные и полезные продукты, но и уверенность в их качестве и безопасности.',
      cards: {
        fruits: {
          title: 'Фрукты',
          description: 'Свежие фрукты, выращенные с заботой и доставленные по всему миру.',
          cta: 'Смотреть',
        },
        vegetables: {
          title: 'Овощи',
          description: 'Натуральные овощи, где вкус начинается прямо с почвы.',
          cta: 'Смотреть',
        },
      },
    },
    why: {
      title: 'Почему выбирают нас',
      items: [
        {
          title: 'Высокое качество',
          description:
            'Мы предлагаем лучшие фрукты и овощи, проходящие строгий контроль качества и соответствующие всем стандартам.',
        },
        {
          title: 'Прямые закупки',
          description:
            'Работаем напрямую с фермерами, сохраняем прозрачность цепочки поставок и конкурентные цены.',
        },
        {
          title: 'Гибкое партнёрство',
          description:
            'Предлагаем персонализированные условия, разные объёмы и графики доставки под задачи каждого клиента.',
        },
        {
          title: 'Своевременная доставка',
          description:
            'Развитая логистика в СНГ и ЕС позволяет соблюдать сроки вне зависимости от сложности заказа.',
        },
        {
          title: 'Поддержка и сервис',
          description:
            'Команда сопровождает вас на каждом этапе — от заявки до постпоставочного сервиса и аналитики.',
        },
        {
          title: 'Инновации и рост',
          description:
            'Внедряем технологии, исследуем новые рынки и совершенствуем процессы, чтобы оставаться лидером.',
        },
      ],
    },
    clients: {
      title: 'Наши клиенты',
      subtitle:
        'Мы сотрудничаем с ведущими торговыми сетями России и Беларуси, а также с ключевыми импортёрами в странах Европейского союза.',
    },
    cta: {
      title: 'Приглашаем к сотрудничеству',
      description: 'Мы готовы предложить лучшие условия для успешного и взаимовыгодного партнёрства.',
      button: 'Оставить заявку',
    },
    footer: {
      socialMedia: 'Социальные сети',
      socialMediaDescription: 'Следите за нашими новостями и обновлениями в социальных сетях',
      information: 'Информация',
      contacts: 'Контакты',
      address: '838, улица Варк, микрорайон Варк, Навоийская область, Узбекистан',
      copyright: '© {year} Fruit Exim. Все права защищены.',
      privacyPolicy: 'Политика конфиденциальности',
      links: {
        aboutUs: 'О нас',
        products: 'Продукция',
        export: 'Экспорт',
        import: 'Импорт',
        contacts: 'Контакты',
      },
    },
  },
  uz: {
    locale: 'uz',
    navigation: ['Bosh sahifa', 'Biz haqimizda', 'Mahsulotlar', 'Eksport', 'Import', 'Kontakt'],
    hero: {
      kicker: 'yangi yetkazib berish',
      title: 'Yangi. Tabiiy. Sifatli.',
      subtitle:
        'Biz ekologik toza sharoitda yetishtirilgan meva-sabzavotlarni yuqori sifat standartlariga to‘liq mos holda yetkazib beramiz.',
      ctaPrimary: 'Katalog',
      ctaSecondary: 'Bog‘lanish',
    },
    cards: [
      { name: 'Atulfo mango', description: 'O‘zbekiston quyoshi ostida pishgan', color: 'bg-orange-400' },
      { name: 'Ko‘k meva', description: 'Farg‘ona fermerlaridan premium rezavor', color: 'bg-indigo-500' },
      { name: 'Hayward kivi', description: 'Eksportga tayyor kalibrlangan hosil', color: 'bg-emerald-500' },
      { name: 'Drakon meva', description: 'HoReCa segmenti uchun ekzotika', color: 'bg-rose-500' },
    ],
    about: {
      kicker: 'kompaniya haqida',
      title: 'Biz haqimizda',
      highlight: 'Fruit Exim',
      description:
        '— O‘zbekistonda tez rivojlanayotgan eksport-import kompaniyasi bo‘lib, tabiiy va yuqori sifatli meva-sabzavot yetkazib berishga ixtisoslashgan.',
      subtitle: 'Biz ishonchli logistika zanjirlarini quramiz va har bir mahsulotning yangiligini kafolatlaymiz.',
      cta: "Batafsil ma'lumot",
    },
    products: {
      title: 'Mahsulotlarimiz',
      subtitle:
        'Bizni tanlab, siz nafaqat mazali va sog‘lom mahsulotlarni, balki ularning sifat va xavfsizligiga bo‘lgan ishonchni ham olasiz.',
      cards: {
        fruits: {
          title: 'Mevalar',
          description: 'Butun dunyoga yetkaziladigan, mehr bilan yetishtirilgan yangi mevalar.',
          cta: 'Ko‘rish',
        },
        vegetables: {
          title: 'Sabzavotlar',
          description: 'Haqiqiy lazzat bevosita tuproqdan boshlanadigan tabiiy sabzavotlar.',
          cta: 'Ko‘rish',
        },
      },
    },
    why: {
      title: 'Nega bizni tanlashadi',
      items: [
        {
          title: 'Yuqori sifat',
          description:
            'Biz qatʼiy nazoratdan o‘tadigan, barcha standartlarga mos keladigan eng yaxshi meva va sabzavotlarni taklif etamiz.',
        },
        {
          title: 'To‘g‘ridan-to‘g‘ri xarid',
          description:
            'Fermerlar bilan bevosita ishlaymiz, bu narxlarni raqobatbardosh va yetkazib berishni shaffof qiladi.',
        },
        {
          title: 'Moslashuvchan hamkorlik',
          description:
            'Har bir mijoz uchun shaxsiy shartlar, turli hajmlar va yetkazib berish jadvalini taklif qilamiz.',
        },
        {
          title: 'O‘z vaqtida yetkazish',
          description:
            'MDH va Yevropa bo‘ylab logistika tarmog‘imiz buyurtma qanchalik murakkab bo‘lishidan qat’i nazar muddatni ta’minlaydi.',
        },
        {
          title: 'Qo‘llab-quvvatlash va servis',
          description:
            'Jamoamiz buyurtmani berishdan tortib qabul qilishgacha har bir bosqichda sizga yordam beradi.',
        },
        {
          title: 'Innovatsiya va o‘sish',
          description:
            'Yangi texnologiyalarni joriy etamiz, bozorlarni o‘rganamiz va jarayonlarni takomillashtiramiz.',
        },
      ],
    },
    clients: {
      title: 'Bizning mijozlarimiz',
      subtitle:
        'Biz Rossiya va Belarusdagi yirik savdo tarmoqlari hamda Yevropa Ittifoqining asosiy importchilari bilan hamkorlik qilamiz.',
    },
    cta: {
      title: 'Hamkorlikka taklif qilamiz',
      description: 'Muvaffaqiyatli va o‘zaro manfaatli hamkorlik uchun eng yaxshi shartlarni taklif etamiz.',
      button: "Ariza qoldiring",
    },
    footer: {
      socialMedia: 'Ijtimoiy tarmoqlar',
      socialMediaDescription: 'Ijtimoiy tarmoqlarda yangiliklar va yangilanishlarimizni kuzatib boring',
      information: 'Ma\'lumot',
      contacts: 'Kontaktlar',
      address: '838, Vark ko\'chasi, Vark mahallasi, Navoiy viloyati, O\'zbekiston',
      copyright: '© {year} Fruit Exim. Barcha huquqlar himoyalangan.',
      privacyPolicy: 'Maxfiylik siyosati',
      links: {
        aboutUs: 'Biz haqimizda',
        products: 'Mahsulotlar',
        export: 'Eksport',
        import: 'Import',
        contacts: 'Kontaktlar',
      },
    },
  },
};

const LocaleContext = createContext();

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('ru');

  const value = useMemo(() => {
    const pack = locales[locale];
    return {
      locale,
      setLocale,
      t: pack,
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used inside LocaleProvider');
  }
  return context;
}

