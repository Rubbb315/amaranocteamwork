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

const filterCategories = [
  { key: 'all', label: 'Բոլորը' },
  { key: 'visa', label: 'Visa' },
  { key: 'mastercard', label: 'Mastercard' },
  { key: 'unionpay', label: 'UnionPay' },
  { key: 'digital', label: 'Digital' },
  { key: 'premium', label: 'Premium' },
  { key: 'business', label: 'Business' },
  { key: 'gift', label: 'Gift' }
];

const Qarter = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredCards = cardsData.filter((card) =>
    card.tags.includes(activeFilter)
  );

  const renderBrandLogo = (brand) => {
    switch (brand) {
      case 'mc':
        return (
          <div className="brand-logo mc-logo">
            <span className="mc-circle red"></span>
            <span className="mc-circle orange"></span>
          </div>
        );
      case 'visa':
        return <span className="brand-logo visa-logo">VISA</span>;
      case 'up':
        return <span className="brand-logo up-logo">UnionPay</span>;
      case 'arca':
        return <span className="brand-logo arca-logo">ArCa</span>;
      default:
        return null;
    }
  };

  return (
    <section className="qarter-page">
      <div className="qarter-container">
        <header className="qarter-header">
          <h1 className="qarter-main-title">Քարտեր</h1>
          <div className="qarter-filters">
            {filterCategories.map((category) => (
              <button
                key={category.key}
                type="button"
                className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                onClick={() => setActiveFilter(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </header>

        <div className="cards-list">
          {filteredCards.map((card) => (
            <article key={card.id} className="card-item">
              <div className="card-visual-wrapper">
                <div
                  className={`bank-card ${card.theme} ${
                    card.isGift ? 'is-gift' : ''
                  } ${card.isTravel ? 'is-travel' : ''} ${
                    card.isMultiVisual ? 'is-multi-visual' : ''
                  }`}
                >
                  <div className="bank-card-top">
                    <span className="bank-name">Evocabank</span>
                    {card.hasChip && <div className="card-chip" />}
                  </div>

                  <div className="bank-card-middle">
                    <p className="card-number">{card.number}</p>
                  </div>

                  <div className="bank-card-bottom">
                    <span className="card-holder">{card.holder}</span>
                    {renderBrandLogo(card.brand)}
                  </div>
                </div>
              </div>

              <div className="card-details">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-subtitle">{card.subtitle}</p>

                {card.stats.length > 0 && (
                  <div className="card-stats">
                    {card.stats.map((stat, index) => (
                      <div key={index} className="stat-box">
                        <div className="stat-value-row">
                          {stat.prefix && (
                            <span className="stat-prefix">{stat.prefix} </span>
                          )}
                          <strong className="stat-value">{stat.value}</strong>
                        </div>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="card-actions">
                  <button type="button" className="btn-order">
                    Պատվիրել քարտը
                  </button>
                  <button type="button" className="btn-more">
                    Իմանալ ավելին
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qarter;  