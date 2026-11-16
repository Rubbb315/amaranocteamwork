
import "./akntartayinvcha.css";

const services = [
  {
    title: "EVOCABANK",
    image: "https://resource.evoca.am/images/WebPayment/evoca.png",
  },
  {
    title: "Միջազգային\nբջջային\nօպերատորներ",
    image: "https://resource.evoca.am/images/WebPayment/international.png",
  },
  {
    title: "Կոմունալ\nվճարումներ",
    image: "https://resource.evoca.am/images/WebPayment/utility.png",
  },
  {
    title: "Ինտերնետ և TV",
    image: "https://resource.evoca.am/images/WebPayment/internettv.png",
  },
  {
    title: "ՃՈ վճարներ",
    image: "https://resource.evoca.am/images/WebPayment/roadpolice.png",
  },
  {
    title: "Վարկային\nկազմակերպություններ",
    image: "https://resource.evoca.am/images/WebPayment/roadpolice.png",
  },
  {
    title: "Միջոցառումներ",
    image: "https://resource.evoca.am/images/WebPayment/event.png",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-container">

          <div className="footer-brand">
            <img
              src="https://payments.evoca.am/assets/images/logo.png"
              alt="EvocaBank"
            />

            <p>
              Բանկը վերահսկվում է ՀՀ<br />
              ԿԲ-ի կողմից
            </p>

            <small>
              Copyright © 1990-2026 Evocabank
            </small>
          </div>

          <div className="footer-address">
            <p>
              ք. Երևան, 0010,<br />
              Հանրապետության 44/2
            </p>
          </div>

          <div className="footer-contact">
            <a href="mailto:hello@evoca.am">
              hello@evoca.am
            </a>

            <a href="tel:+37410605555">
              +374 10 605555
            </a>
          </div>

          <div className="footer-qr">
            <img
              src="https://payments.evoca.am/assets/images/qr-evoca.png"
              alt="QR Code"
            />
          </div>

          <div className="footer-social">
            <div className="social-icons">
              <a href="#">
                <img src="https://payments.evoca.am/assets/images/social/facebook-gray.png" alt="Facebook" />
              </a>

              <a href="#">
                <img src="https://payments.evoca.am/assets/images/social/instagram-gray.png" alt="Instagram" />
              </a>

              <a href="#">
                <img src="https://payments.evoca.am/assets/images/social/youtube-gray.png" alt="YouTube" />
              </a>

              <a href="#">
                <img src="https://payments.evoca.am/assets/images/social/linkedin-gray.png" alt="LinkedIn" />
              </a>

              <a href="#">
                <img src="https://payments.evoca.am/assets/images/social/pinterest-gray.png" alt="Pinterest" />
              </a>
            </div>

            <div className="store-links">
              <a href="#">
                <img src="https://resource.evoca.am/images/google_play_badge.png" alt="Google Play" />
              </a>

              <a href="#">
                <img src="https://resource.evoca.am/images/app_store_badge.png" alt="App Store" />
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">

          <p>
            Հարգելի՛ այցելուներ, կայքի որևէ տեղեկատվության
            վերարտադրման տարածքներում անհամապատասխանություն,
            ինչպես նաև չնչին և աննշան լեզվական ու ամբողջականության
            նյութ տեսնելու դեպքում խնդրում ենք առաջարկել հայերեն
            տարբերակով։ Էլեկտրոնային փոստի միջոցով կարող եք կապ
            հաստատել բանկի հետ։
          </p>

          <div className="partner-logos">
            <img src="https://payments.evoca.am/assets/images/cb.png" alt="Partner 1" />
            <img src="https://payments.evoca.am/assets/images/financial_systen_mediator.png" alt="Partner 2" />
            <img src="https://payments.evoca.am/assets/images/abc_finance.png" alt="Partner 3" />
            <img src="https://payments.evoca.am/assets/images/deposit_guarantee.png" alt="Partner 4" />
            <img src="https://payments.evoca.am/assets/images/arca.png" alt="Partner 5" />
          </div>

        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="page">

      <header className="header">
        <div className="header-container">

          <div className="logo-section">
            <div className="logo">
              <img
                src="https://payments.evoca.am/assets/images/logo.png"
                alt="Evoca"
              />
            </div>

            <p>Online payment</p>
          </div>

          <div className="header-right">
            <a href="tel:+37410605555">
              +374 10 605555
            </a>

            <span className="language">🌐</span>

            <button className="login-btn">
              Պատմություն
            </button>
          </div>

        </div>
      </header>

      <main className="main">
        <h1>Գլխավոր</h1>

        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>

              <div className="service-icon">
                <img
                  src={service.image}
                  alt={service.title}
                />
              </div>

              <div className="service-title">
                {service.title.split("\n").map((line, i) => (
                  <span key={i}>{line}</span>
                ))}
              </div>

            </div>
          ))}
        </div>
      </main>

      <Footer />

    </div>
  );
}

export default App;
