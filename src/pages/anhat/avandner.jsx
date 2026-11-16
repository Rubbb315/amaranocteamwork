import React, { useState } from 'react';
import './qarter.css';

export const cardsData = [
  {
    id: 'mastercard-standard',
    title: 'Mastercard Standard',
    subtitle: 'Աշխատի՛ր ցանկացած տեղում որտեղ էլ լինես. քո ֆինանսական միջոցները 24/7 սկզբունքով հասանելի կլինեն:',
    tags: ['all', 'mastercard'],
    theme: 'theme-purple',
    brand: 'mc',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով մինչև 1 մլն ֏' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '5000 ֏', label: 'Քարտի տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-classic',
    title: 'Visa Classic',
    subtitle: 'Կատարի՛ր մինչև 20,000 ՀՀ դրամի անհպում գործարքներ Visa Classic քարտով՝ առանց PIN կոդի մուտքագրման:',
    tags: ['all', 'visa'],
    theme: 'theme-classic',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.2%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '5,000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-digital',
    title: 'Visa Digital',
    subtitle: 'Պատվիրի՛ր Evoca Digital քարտը հենց EvocaTOUCH հավելվածով, և քարտդ կակտիվանա րոպեների ընթացքում',
    tags: ['all', 'digital', 'visa'],
    theme: 'theme-holo',
    brand: 'visa',
    hasChip: false,
    number: '•••• 1234',
    holder: '0.00 $',
    stats: [
      { prefix: '', value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { prefix: 'մինչև', value: '4%', label: 'Տարեկան տոկոսային դրույքաչափ՝ դրական մնացորդի նկատմամբ հաշվարկվող տարեկան տոկոսադրույք' },
      { prefix: '', value: '1000 ֏', label: 'Տարեկան սպասարկում' },
      { prefix: 'մինչև', value: '0.5%', label: 'Քեշբեք' }
    ]
  },
  {
    id: 'mastercard-world-digital',
    title: 'Mastercard World Digital',
    subtitle: 'Mastercard World Digital քարտն արդեն հասանելի է EvocaTOUCH հավելվածում։ Պատվիրի՛ր թվային քարտդ հիմա և այն հասանելի կլինի քո հավելվածում հաշված րոպեների ընթացքում',
    tags: ['all', 'digital', 'mastercard'],
    theme: 'theme-dark',
    brand: 'mc',
    hasChip: false,
    number: '•••• 1234   10/29',
    holder: '',
    stats: [
      { prefix: '', value: '2%', label: 'Կանխիկացում բանկի բանկոմատներից' },
      { prefix: '', value: '2.5%', label: 'Կանխիկացում ArCa համակարգի անդամ հանդիսացող ՀՀ բանկերի բանկոմատներից և POS տերմինալների միջոցով' },
      { prefix: '', value: '1000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'digital-gift-card',
    title: 'Digital Gift Card',
    subtitle: 'Սիրելի մարդկանց համար նվեր ընտրելը պատասխանատու ու հաճելի գործ է, բայց նաև ժամանակատար ու նյարդայնացնող, հատկապես երբ չգիտես՝ ինչ նվիրել: Մենք առաջարկում ենք էլեկտրոնային նվերի տարբերակ՝',
    tags: ['all', 'gift', 'mastercard'],
    theme: 'theme-gift',
    brand: 'mc',
    isGift: true,
    number: '•••• 1234',
    holder: '',
    stats: []
  },
  {
    id: 'mastercard-gold',
    title: 'Mastercard Gold',
    subtitle: 'Ընդգծի՛ր կարգավիճակդ քո Mastercard Gold քարտով։',
    tags: ['all', 'premium', 'mastercard'],
    theme: 'theme-gold',
    brand: 'mc',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով մինչև 2 մլն ֏' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '15.000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'visa-vision',
    title: 'Visa Vision',
    subtitle: 'Կանխիկացրի՛ր մանրածախ առևտրի վայրերից ու տես Visa Vision քարտի բացառիկ առավելությունները։',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-vision',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: []
  },
  {
    id: 'visa-gold',
    title: 'Visa Gold',
    subtitle: 'Նոր կարգավիճակդ բացահայտիր 25.11.2024 թվականից',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-visa-gold',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.2%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '15,000 ֏', label: 'Տարեկան սպասարկում' }
    ]
  },
  {
    id: 'unionpay-gold',
    title: 'UnionPay Gold',
    subtitle: 'Անվտանգ աշխատանքդ արագ և հարմար վճարումով ուղեկցվի:',
    tags: ['all', 'unionpay', 'premium'],
    theme: 'theme-gold',
    brand: 'up',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.5%', label: 'Կանխիկացում' },
      { prefix: '', value: '5 տարի', label: 'Քարտի ժամկետ' },
      { prefix: '', value: '15000 ֏', label: 'Քարտի տարեկան սպասարկման վճար' },
      { prefix: '', value: 'Ամենուր', label: 'Կիրառություն' }
    ]
  },
  {
    id: 'evoca-travel-card',
    title: 'Evoca Travel Card',
    subtitle: 'Սիրո՞ւմ ես ճամփորդել, ուրեմն ժամանակն է ձեռք բերել Evoca Mastercard Travel Card, որը կդառնա քո ճամփորդական վստահելի ընկերը:',
    tags: ['all', 'mastercard', 'premium'],
    theme: 'theme-travel',
    brand: 'mc',
    isTravel: true,
    number: 'BOARDING PASS',
    holder: '',
    stats: [
      { prefix: 'մինչև', value: '1.5%', label: 'Cashback պարտատոմսերով ձեռքբերված վճարումների դեպքում' },
      { prefix: 'անվճար', value: '6 մուտք', label: 'Lounge Key պոլիսներ բանկի հաշվով համար' },
      { prefix: 'անվճար', value: '6 անգամ', label: 'Fast track ծառայություն ճանապարհորդության ընթացքում համար' },
      { prefix: '', value: '16.000֏', label: 'Քարտի տարեկան սպասարկում' }
    ]
  },
  {
    id: 'evoca-visa-platinum',
    title: 'Evoca Visa Platinum',
    subtitle: 'Պրեմիում առավելություններ պրեմիում քարտով։',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-platinum',
    brand: 'visa',
    hasChip: true,
    number: '•••• 1234',
    holder: '',
    stats: [
      { prefix: '', value: '30.000 ֏', label: 'Տարեկան պահպանման վճար' },
      { prefix: 'անվճար', value: '6 մուտք', label: 'Տրամադրվող պոլիսների բանկի պոլիսներ' }
    ]
  },
  {
    id: 'wilco-visa-infinite',
    title: 'Wilco Visa Infinite',
    subtitle: 'Բացահայտի՛ր պրեմիում բանկինգի և անհատականացված ֆինանսական տրամադրվող Wilco Visa Infinite քարտի հետ:',
    tags: ['all', 'visa', 'premium'],
    theme: 'theme-infinite',
    brand: 'visa',
    hasChip: true,
    number: '•••• 1234',
    holder: '',
    stats: []
  },
  {
    id: 'visa-business',
    title: 'Visa Business',
    subtitle: 'Գործությունդ բարելավիր ներկայացուցչական հաշվեհամար կատարող Visa Business քարտով։',
    tags: ['all', 'visa', 'business'],
    theme: 'theme-business',
    brand: 'visa',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.2%', label: 'Կանխիկացում բանկի բանկոմատների միջոցով' },
      { prefix: '', value: '0.8%', label: 'Կանխիկացում ArCa անդամ բանկերի բանկոմատների միջոցով' },
      { prefix: 'min 1,500 ֏', value: '1%', label: 'Կանխիկացում ArCa անդամ չհանդիսացող բանկերի բանկոմատների միջոցով' },
      { prefix: '', value: '0.2%', label: 'Բանկի տարածքում POS տերմինալի հաշվից կանխիկացում' }
    ]
  },
  {
    id: 'unionpay-business-platinum',
    title: 'UnionPay Business Platinum',
    subtitle: 'Այս քարտերով կարող էդ կառուցես ձեր գործընկերոջ հաջողության ճանապարհին:',
    tags: ['all', 'unionpay', 'business'],
    theme: 'theme-dark-platinum',
    brand: 'up',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: [
      { prefix: '', value: '0.5%', label: 'Կանխիկացում' },
      { prefix: '', value: '5 տարի', label: 'Քարտի ժամկետ' },
      { prefix: '', value: '15000 ֏', label: 'Քարտի տարեկան սպասարկման վճար' },
      { prefix: '', value: 'Ամենուր', label: 'Կիրառություն' }
    ]
  },
  {
    id: 'evoca-gift-card',
    title: 'Evoca Gift Card',
    subtitle: 'Նվիրի՛ր Evoca Gift Card, և լավագույն նվերը կլինի քոնը։',
    tags: ['all', 'gift'],
    theme: 'theme-gift-grid',
    brand: 'mc',
    isMultiVisual: true,
    number: '•••• 1234',
    holder: '',
    stats: []
  },
  {
    id: 'dalma-gift-card',
    title: 'Dalma Gift Card',
    subtitle: 'Նվերը ընտրելն այնքան դժվար չէ։',
    tags: ['all', 'gift'],
    theme: 'theme-dalma',
    brand: 'arca',
    hasChip: true,
    number: '5000 2345 6000 7890',
    holder: 'NAME SURNAME',
    stats: []
  },
  {
    id: 'my-ler-gift-card',
    title: 'MyLer Gift Card',
    subtitle: 'Մեկ քարտ, անսահմանափակ արկածներ։',
    tags: ['all', 'gift'],
    theme: 'theme-myler',
    brand: 'arca',
    hasChip: true,
    number: '0000 2345 6000 7890',
    holder: 'MYLER GIFT CARD',
    stats: []
  }
];

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const BrandBadge = ({ brand }) => {
  if (brand === 'mc') {
    return (
      <div className="mc-circles">
        <span className="mc-red" />
        <span className="mc-yellow" />
      </div>
    );
  }
  if (brand === 'visa') return <span className="brand-text visa">VISA</span>;
  if (brand === 'up') return <span className="brand-text up">UnionPay</span>;
  if (brand === 'arca') return <span className="brand-text arca">ArCa</span>;
  return null;
};

export default function CardsApp() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredCards = cardsData.filter((item) =>
    item.tags.includes(activeFilter)
  );

  return (
    <>
      <header className="site-header">
        <div className="top-bar">
          <div className="container top-bar-inner">
            <nav className="top-links">
              <a href="#" className="active">Անհատ</a>
              <a href="#">Բիզնես</a>
              <a href="#">Ակնթարթային վճարումներ</a>
              <a href="#">Մեր մասին</a>
              <a href="#">Նորություններ</a>
              <a href="#">Բլոգ</a>
              <a href="#">Կարիերա</a>
            </nav>
            <div className="top-actions">
              <button className="dropdown-btn">Առցանց հայտեր <span>⌄</span></button>
              <button className="dropdown-btn">Հետադարձ կապ <span>⌄</span></button>
              <div className="header-icons">
                <button aria-label="Մասնաճյուղեր">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </button>
                <button aria-label="Օգնություն">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                  </svg>
                </button>
                <button aria-label="Լեզու">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </button>
                <button aria-label="Որոնում">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
                <button aria-label="Մենյու">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="main-nav">
          <div className="container main-nav-inner">
            <a href="#" className="logo">evoca</a>
            <nav className="primary-menu">
              <a href="#">Վարկեր</a>
              <a href="#" className="active" onClick={(e) => { e.preventDefault(); setActiveFilter('all'); }}>Քարտեր</a>
              <a href="#">Ավանդներ</a>
              <a href="#">Հաշիվներ</a>
              <a href="#">Փոխանցումներ</a>
              <a href="#">Արժեթղթեր</a>
              <a href="#">EvocaSALARY</a>
              <a href="#">EvocaTOUCH</a>
            </nav>
            <a href="#" className="evoca-online-btn">EvocaONLINE</a>
          </div>
        </div>

        <div className="sub-nav">
          <div className="container sub-nav-inner">
            {[
              { key: 'all', label: 'Բոլոր քարտերը' },
              { key: 'visa', label: 'Visa' },
              { key: 'mastercard', label: 'Mastercard' },
              { key: 'unionpay', label: 'UnionPay' },
              { key: 'digital', label: 'Digital' },
              { key: 'premium', label: 'Premium' },
              { key: 'business', label: 'Business' },
              { key: 'gift', label: 'Gift' }
            ].map((tab) => (
              <a
                key={tab.key}
                href="#"
                className={activeFilter === tab.key ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveFilter(tab.key);
                }}
              >
                {tab.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      <main className="container main-content">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href="#">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </a>
          <span></span>
          <a href="#">Անհատ</a>
          <span></span>
          <a href="#">Քարտեր</a>
          <span></span>
          <span className="current">Քարտեր</span>
        </nav>

        <h1 className="page-title">Քարտեր</h1>

        <div className="cards-list">
          {filteredCards.map((item) => (
            <article className="card-row" key={item.id}>
              <div className="card-visual-wrapper">
                <div className={`bank-card ${item.theme}`}>
                  <div className="card-top">
                    <span className="evoca-logo">evoca</span>
                    {item.hasChip && <span className="card-chip" />}
                  </div>
                  <div className="card-number">{item.number}</div>
                  <div className="card-bottom">
                    <span className="card-holder">{item.holder}</span>
                    <BrandBadge brand={item.brand} />
                  </div>
                </div>
                <div className="card-shadow-ellipse" />
              </div>

              <div className="card-info">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-desc">{item.subtitle}</p>

                {item.stats.length > 0 && (
                  <div className="stats-grid">
                    {item.stats.map((stat, idx) => (
                      <div className="stat-item" key={idx}>
                        <span className="stat-prefix">{stat.prefix}</span>
                        <div className="stat-value">{stat.value}</div>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <button className="btn-details" onClick={() => setSelectedItem(item)}>
                  <span>Մանրամասն</span>
                  <ArrowIcon />
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-col brand-col">
            <div className="footer-logo">evoca<span className="footer-bank">BANK</span></div>
            <p className="footer-address">ՀՀ, Երևան 0010,<br />Հանրապետության 43/2</p>
            <p className="footer-license">Գրանցված և վերահսկվում է<br />Հայաստանի Հանրապետության<br />Կենտրոնական բանկի կողմից</p>
            <p className="footer-copy">1990 - 2026, «Էվոկաբանկ» ՓԲԸ<br />Բոլոր իրավունքները պաշտպանված են։</p>
          </div>
        </div>
      </footer>

      {selectedItem && (
        <div className="modal-backdrop open" onClick={(e) => { if (e.target === e.currentTarget) setSelectedItem(null); }}>
          <div className="modal-box">
            <button className="modal-close" onClick={() => setSelectedItem(null)}>×</button>
            <h3>{selectedItem.title}</h3>
            <p>{selectedItem.subtitle}</p>
            <div className="modal-specs">
              {selectedItem.stats.map((s, idx) => (
                <div className="modal-spec-card" key={idx}>
                  <strong>{s.value}</strong>
                  <span>{s.prefix ? `${s.prefix} — ` : ''}{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}