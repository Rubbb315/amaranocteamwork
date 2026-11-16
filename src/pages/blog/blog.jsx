import React, { useState } from "react";
import "./Blog.css";

const articles = [
  {
    id: 1,
    category: "Կենսակերպ",
    title: "Monthly Recap",
    description:
      "Monthly Recap-ն օգնում է ամփոփել ամիսը, հասկանալ ձեռքբերումները, բաց թողածները և փոքր քայլերով կատարել մեծ ու արդյունավետ փոփոխություններ։",
    date: "05.01.2026",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
  },
  {
    id: 2,
    category: "Ներդրումներ",
    title: "EvocaINVEST. ինչպե՞ս կատարել գործարքներ",
    description:
      "Այս բլոգում կներկայացնենք EvocaINVEST-ն, ինչպես նաև գործարքներ կնքելու համար անհրաժեշտ գործիքներից օգտվելու քայլերը։",
    date: "17.06.2024",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900",
  },
  {
    id: 3,
    category: "Ներդրումներ",
    title: "Ներդրումների կարելիներն ու չի կարելիները",
    description: "Իմացիր ներդրումների կարևոր սկզբունքների մասին։",
    date: "23.04.2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
  },
  {
    id: 4,
    category: "Ներդրումներ",
    title: "Փոքր քայլերով դեպի մեծ եկամուտներ",
    description: "Բացահայտիր ֆինանսական աճի հնարավորությունները։",
    date: "11.04.2024",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=900",
  },
  {
    id: 5,
    category: "Բիզնես",
    title: "Ինչպե՞ս սկսել բիզնես։ Guide from A to Z",
    description: "Ամենակարևոր քայլերը սեփական բիզնեսը սկսելու համար։",
    date: "05.01.2024",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900",
  },
  {
    id: 6,
    category: "Կենսակերպ",
    title: "Նայիր շուրջդ և տես, թե որքան ավելորդ իրեր կան",
    description: "Պարզեցրու կյանքդ և ստեղծիր ավելի կազմակերպված միջավայր։",
    date: "09.02.2022",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900",
  },
];

const categories = ["Բոլորը", "Բիզնես", "Կենսակերպ", "Ներդրումներ"];

function BlogCard({ article }) {
  return (
    <article className="blog-card">
      <div className="blog-image">
        <img src={article.image} alt={article.title} />
      </div>

      <div className="blog-card-content">
        <span className="blog-category">{article.category}</span>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <span className="blog-date">{article.date}</span>
      </div>
    </article>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("Բոլորը");

  const filteredArticles =
    activeCategory === "Բոլորը"
      ? articles
      : articles.filter(
          (article) => article.category === activeCategory
        );

  return (
    <div className="blog-page">

      {/* HEADER */}
      <header className="blog-header">
        <div className="header-logo">
          <a href="/">evoca<span>bank</span></a>
        </div>

        <nav className="header-nav">
          <a href="#">Անհատ</a>
          <a href="#">Բիզնես</a>
          <a href="#">Մեր մասին</a>
          <a href="#">Նորություններ</a>
          <a href="#" className="active">Բլոգ</a>
          <a href="#">Կարիերա</a>
        </nav>

        <div className="header-right">
          <span>ՀԱՅ</span>
          <button>Առցանց հայտեր</button>
        </div>
      </header>

      {/* BLOG TITLE */}
      <main className="blog-container">
        <div className="blog-heading">
          <h1>Բլոգ</h1>
          <p>Գաղափարներ, գիտելիքներ և ոգեշնչում</p>
        </div>

        {/* CATEGORIES */}
        <div className="blog-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={
                activeCategory === category ? "selected" : ""
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}

          <button className="archive-button">
            Արխիվ ↗️
          </button>
        </div>
        {/* ARTICLES */}
        <section className="blog-grid">
          {filteredArticles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </section>

        {/* FEATURED SECTIONS */}
        <section className="featured-section">
          <h2>Բաց մի թող</h2>
          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1000"
              alt="Investment"
            />
            <div>
              <span>Ներդրումներ</span>
              <h3>EvocaINVEST. ինչպե՞ս կատարել գործարքներ</h3>
              <p>
                Բացահայտիր ներդրումային հնարավորությունները
                EvocaINVEST-ի միջոցով։
              </p>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <h2>Լավագույն</h2>
          <div className="featured-card">
            <img
              src="https://images.unsplash.com/photo-1513151233558-d860c5398176?w=1000"
              alt="Lifestyle"
            />
            <div>
              <span>Կենսակերպ</span>
              <h3>Ամանորի քո Evocaգույն երազանքը</h3>
              <p>
                Բոլոր պատասխանները կգտնես մեր բլոգում։
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="blog-footer">
        <div>
          <h2>evoca<span>bank</span></h2>
          <p>ք. Երևան, 0010, Հանրապետության 44/2</p>
          <p>+374 10 605555</p>
        </div>

        <p>1990 - 2026 © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</p>
      </footer>

    </div>
  );
}