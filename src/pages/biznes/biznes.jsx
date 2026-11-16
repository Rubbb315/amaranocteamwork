import React, { useState } from 'react';
import './biznes.css';

const loanTypes = [
  {
    id: 1,
    tag: 'Արագ և պարզ',
    title: 'Evoca Business Online',
    description: 'Ստացեք բիզնես վարկ առցանց՝ առանց բանկ այցելելու և գրավի ապահովման։',
    rate: 'Սկսած 13.5%',
    amount: 'Մինչև 10,000,000 ֏',
    term: 'Մինչև 36 ամիս',
  },
  {
    id: 2,
    tag: 'Առանց գրավի',
    title: 'Բիզնես Էքսպրես վարկ',
    description: 'Արագ ֆինանսավորում փոքր և միջին բիզնեսի ընթացիկ ծախսերի ու զարգացման համար։',
    rate: 'Սկսած 14%',
    amount: 'Մինչև 15,000,000 ֏',
    term: 'Մինչև 48 ամիս',
  },
  {
    id: 3,
    tag: 'Զարգացման համար',
    title: 'Ներդրումային բիզնես վարկ',
    description: 'Հիմնական միջոցների ձեռքբերման, արտադրության ընդլայնման և վերազինման համար։',
    rate: 'Սկսած 11.5%',
    amount: 'Մինչև 500,000,000 ֏',
    term: 'Մինչև 84 ամիս',
  },
  {
    id: 4,
    tag: 'Շրջանառու միջոցներ',
    title: 'Վարկային գիծ և Օվերդրաֆտ',
    description: 'Ճկուն ֆինանսական գործիք՝ բիզնեսի ամենօրյա գործառնություններն անխափան իրականացնելու համար։',
    rate: 'Սկսած 12.5%',
    amount: 'Մինչև 200,000,000 ֏',
    term: 'Մինչև 36 ամիս',
  },
  {
    id: 5,
    tag: 'Ագրո բիզնես',
    title: 'Գյուղատնտեսական վարկեր',
    description: 'Պետական սուբսիդավորմամբ և մատչելի պայմաններով վարկեր գյուղատնտեսության ոլորտի համար։',
    rate: 'Սկսած 3% (սուբսիդավորված)',
    amount: 'Մինչև 100,000,000 ֏',
    term: 'Մինչև 60 ամիս',
  },
  {
    id: 6,
    tag: 'Հատուկ առաջարկ',
    title: 'Կանանց բիզնեսի աջակցման վարկ',
    description: 'Արտոնյալ պայմաններ և խորհրդատվություն կին ձեռներեցների նախաձեռնությունների համար։',
    rate: 'Սկսած 11%',
    amount: 'Մինչև 80,000,000 ֏',
    term: 'Մինչև 60 ամիս',
  },
];

const faqData = [
  {
    question: 'Ովքե՞ր կարող են դիմել բիզնես վարկի համար',
    answer: 'Բիզնես վարկերի համար կարող են դիմել ՀՀ տարածքում գրանցված և առնվազն 6 ամիս գործունեություն ծավալող անհատ ձեռնարկատերերը (ԱՁ) և իրավաբանական անձինք (ՍՊԸ, ՓԲԸ և այլն)։',
  },
  {
    question: 'Ի՞նչ փաստաթղթեր են անհրաժեշտ վարկի ձևակերպման համար',
    answer: 'Անհրաժեշտ են ղեկավարի անձը հաստատող փաստաթուղթ, պետական ռեգիստրի գրանցման վկայական, հարկային հաշվետվություններ և ֆինանսական գործունեությունը հիմնավորող այլ փաստաթղթեր՝ կախված վարկատեսակից։',
  },
  {
    question: 'Որքա՞ն ժամանակում է կայացվում վարկի տրամադրման որոշումը',
    answer: 'Օնլայն և էքսպրես բիզնես վարկերի դեպքում որոշումը կայացվում է մի քանի րոպեից մինչև 1 աշխատանքային օրվա ընթացքում, իսկ խոշոր ներդրումային վարկերի դեպքում՝ 3-5 աշխատանքային օրում։',
  },
  {
    question: 'Հնարավո՞ր է վարկի վաղաժամկետ մարում առանց տույժերի',
    answer: 'Այո, Evocabank-ի բիզնես վարկերի մեծ մասը հնարավոր է մարել վաղաժամկետ՝ առանց հավելյալ տույժերի կամ սահմանափակումների։',
  },
];

const Biznes = () => {
  // Վարկային հաշվիչի state-եր
  const [amount, setAmount] = useState(5000000);
  const [months, setMonths] = useState(24);
  const [rate, setRate] = useState(13.5);
  const [activeFaq, setActiveFaq] = useState(null);

  // Հայտի ձևաթղթի state-եր
  const [formData, setFormData] = useState({
    companyName: '',
    taxId: '',
    phone: '',
    loanAmount: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Ամսական վճարի հաշվարկ (Անուիտետային բանաձև)
  const monthlyRate = rate / 100 / 12;
  const monthlyPayment = Math.round(
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))
  );
  const totalPayment = monthlyPayment * months;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ companyName: '', taxId: '', phone: '', loanAmount: '' });
    }, 4000);
  };

  const scrollToForm = () => {
    const formEl = document.getElementById('loan-application');
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="evoca-biz-page">
      {/* Breadcrumb */}
      <div className="evoca-container">
        <nav className="evoca-breadcrumb">
          <span>Գլխավոր</span> / <span>Բիզնես</span> / <strong>Բիզնես վարկեր</strong>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="evoca-hero">
        <div className="evoca-container evoca-hero-grid">
          <div className="evoca-hero-content">
            <span className="evoca-badge">Բիզնեսի աճի համար</span>
            <h1>Բիզնես վարկեր՝ հարմարեցված քո ընկերության նպատակներին</h1>
            <p>
              Ընդլայնի՛ր բիզնեսդ, համալրի՛ր շրջանառու միջոցները կամ կատարի՛ր նոր ներդրումներ
              արագ, ճկուն և մրցունակ պայմաններով։
            </p>
            <div className="evoca-hero-actions">
              <button className="evoca-btn-primary" onClick={scrollToForm}>
                Դիմել առցանց
              </button>
              <a href="#loan-types" className="evoca-btn-secondary">
                Դիտել վարկատեսակները
              </a>
            </div>
          </div>

          <div className="evoca-hero-card">
            <div className="evoca-stat-box">
              <span className="stat-label">Տարեկան տոկոսադրույք</span>
              <strong className="stat-value">Սկսած 11%-ից</strong>
            </div>
            <div className="evoca-stat-box">
              <span className="stat-label">Առավելագույն գումար</span>
              <strong className="stat-value">Մինչև 500 մլն ֏</strong>
            </div>
            <div className="evoca-stat-box">
              <span className="stat-label">Մարման ժամկետ</span>
              <strong className="stat-value">Մինչև 84 ամիս</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Types Section */}
      <section id="loan-types" className="evoca-section">
        <div className="evoca-container">
          <div className="evoca-section-header">
            <h2>Բիզնես վարկերի տեսակները</h2>
            <p>Ընտրեք Ձեր բիզնեսի ոլորտին և ծավալներին համապատասխանող վարկային պրոդուկտը</p>
          </div>

          <div className="evoca-loans-grid">
            {loanTypes.map((loan) => (
              <div key={loan.id} className="evoca-loan-card">
                <div className="loan-card-top">
                  <span className="loan-tag">{loan.tag}</span>
                  <h3>{loan.title}</h3>
                  <p>{loan.description}</p>
                </div>

                <div className="loan-card-specs">
                  <div className="spec-item">
                    <span>Տոկոսադրույք</span>
                    <strong>{loan.rate}</strong>
                  </div>
                  <div className="spec-item">
                    <span>Գումար</span>
                    <strong>{loan.amount}</strong>
                  </div>
                  <div className="spec-item">
                    <span>Ժամկետ</span>
                    <strong>{loan.term}</strong>
                  </div>
                </div>

                <button className="evoca-card-btn" onClick={scrollToForm}>
                  Դիմել վարկի համար →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Calculator Section */}
      <section className="evoca-section evoca-bg-light">
        <div className="evoca-container">
          <div className="evoca-section-header">
            <h2>Վարկային հաշվիչ</h2>
            <p>Հաշվարկեք Ձեր բիզնես վարկի մոտավոր ամսական վճարը</p>
          </div>

          <div className="evoca-calculator-box">
            <div className="calc-controls">
              <div className="calc-group">
                <div className="calc-label-row">
                  <label>Վարկի գումար</label>
                  <strong>{amount.toLocaleString('en-US')} ֏</strong>
                </div>
                <input
                  type="range"
                  min="500000"
                  max="100000000"
                  step="500000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
                <div className="calc-limits">
                  <span>500,000 ֏</span>
                  <span>100,000,000 ֏</span>
                </div>
              </div>

              <div className="calc-group">
                <div className="calc-label-row">
                  <label>Մարման ժամկետ</label>
                  <strong>{months} ամիս</strong>
                </div>
                <input
                  type="range"
                  min="6"
                  max="84"
                  step="6"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                />
                <div className="calc-limits">
                  <span>6 ամիս</span>
                  <span>84 ամիս</span>
                </div>
              </div>

              <div className="calc-group">
                <div className="calc-label-row">
                  <label>Տարեկան տոկոսադրույք</label>
                  <strong>{rate}%</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="18"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                />
                <div className="calc-limits">
                  <span>10%</span>
                  <span>18%</span>
                </div>
              </div>
            </div>

            <div className="calc-result">
              <span className="result-subtitle">Ամսական մոտավոր վճար</span>
              <div className="result-main-price">
                {monthlyPayment.toLocaleString('en-US')} <span>֏</span>
              </div>
              <div className="result-details">
                <div>
                  <span>Ընդհանուր վճարման ենթակա գումար</span>
                  <strong>{totalPayment.toLocaleString('en-US')} ֏</strong>
                </div>
              </div>
              <button className="evoca-btn-primary full-width" onClick={scrollToForm}>
                Ուղարկել հայտ
              </button>
              <small className="calc-disclaimer">
                * Հաշվարկը կրում է տեղեկատվական բնույթ և կարող է տարբերվել վերջնական առաջարկից։
              </small>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="loan-application" className="evoca-section">
        <div className="evoca-container">
          <div className="evoca-form-wrapper">
            <div className="evoca-form-info">
              <h2>Դիմե՛ք բիզնես վարկի համար հենց հիմա</h2>
              <p>
                Լրացրեք հայտը, և մեր բիզնես խորհրդատուն կապ կհաստատի Ձեզ հետ՝ ներկայացնելու
                լավագույն պայմանները։
              </p>
              <ul className="evoca-benefits-list">
                <li>✓ Անհատական մոտեցում յուրաքանչյուր բիզնեսին</li>
                <li>✓ Արագ ուսումնասիրություն և հաստատում</li>
                <li>✓ Մարման ճկուն գրաֆիկ՝ սեզոնայնության հաշվառմամբ</li>
              </ul>
            </div>

            <form className="evoca-form" onSubmit={handleFormSubmit}>
              {submitted ? (
                <div className="evoca-success-msg">
                  <h3>Հայտն ուղարկված է</h3>
                  <p>Շնորհակալություն։ Մեր մասնագետը շուտով կապ կհաստատի Ձեզ հետ։</p>
                </div>
              ) : (
                <>
                  <div className="form-field">
                    <label>Ընկերության անվանում կամ ԱՁ *</label>
                    <input
                      type="text"
                      placeholder="Օրինակ՝ Էվոկա ՍՊԸ"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>ՀՎՀՀ</label>
                    <input
                      type="text"
                      placeholder="8-նիշ ծածկագիր"
                      maxLength="8"
                      value={formData.taxId}
                      onChange={(e) => setFormData({ ...formData, taxId: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Հեռախոսահամար *</label>
                    <input
                      type="tel"
                      placeholder="+374 XX XX XX XX"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="form-field">
                    <label>Ցանկալի վարկի գումար (ՀՀ դրամ)</label>
                    <input
                      type="number"
                      placeholder="Օրինակ՝ 10000000"
                      value={formData.loanAmount}
                      onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="evoca-btn-primary full-width">
                    Հաստատել հայտը
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="evoca-section evoca-bg-light">
        <div className="evoca-container">
          <div className="evoca-section-header">
            <h2>Հաճախ տրվող հարցեր</h2>
          </div>

          <div className="evoca-faq-list">
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className={`evoca-faq-item ${activeFaq === idx ? 'open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h4>{item.question}</h4>
                  <span className="faq-icon">{activeFaq === idx ? '−' : '+'}</span>
                </div>
                {activeFaq === idx && <p className="faq-answer">{item.answer}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Biznes;