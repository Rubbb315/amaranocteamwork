import "./mermasin.css";

function Mermasin() {
    return (
        <main className="mermasin">

            <section className="mer-hero">
                <div className="mer-hero-content">
                    <span>EVOCABANK</span>
                    <h1>
                        Դեպի նոր <br />
                        <span>իրականություն</span>
                    </h1>
                    <p>
                        Արագ, պարզ և նորարար բանկային
                        ծառայություններ՝ ստեղծված մարդկանց համար։
                    </p>
                    <a href="#about">Մեր մասին ↗</a>
                </div>
                <div className="mer-hero-circle">V</div>
            </section>

            <section className="mer-about" id="about">
                <span className="mer-label">01 — ՄԵՐ ՄԱՍԻՆ</span>

                <div className="mer-about-content">
                    <h2>
                        Մենք ստեղծում ենք
                        <span> նոր բանկային իրականություն։</span>
                    </h2>

                    <div>
                        <p>
                            Evocabank-ը արագ, պարզ և նորարար
                            ծառայություններ մատուցող բանկ է։
                        </p>
                        <p>
                            Մենք հատուկ ուշադրություն ենք դարձնում
                            նորագույն տեխնոլոգիաների և մոբայլ
                            ծառայությունների զարգացմանը։
                        </p>
                    </div>
                </div>
            </section>

            <section className="mer-vision">
                <span className="mer-label">02 — ՄԵՐ ՆՊԱՏԱԿԸ</span>

                <div className="mer-vision-content">
                    <div>
                        <h2>Մեր տեսլականը</h2>
                        <p>
                            Դառնալ գլոբալ ֆինտեխ գործընկեր՝
                            ապահովելով հարմարավետ և նորարար
                            ծառայություններ։
                        </p>
                    </div>

                    <div>
                        <h2>Մեր առաքելությունը</h2>
                        <p>
                            Հնարավորություն տալ մարդկանց երազելու
                            ավելի համարձակ և կառուցելու ավելի լավ ապագա։
                        </p>
                    </div>
                </div>
            </section>

            <section className="mer-history">
                <span className="mer-label">03 — ՄԵՐ ՊԱՏՄՈՒԹՅՈՒՆԸ</span>

                <h2>Մեր ճանապարհը</h2>

                <div className="mer-timeline">
                    <div>
                        <h3>2026</h3>
                        <p>Նոր զարգացումներ և միջազգային համագործակցություններ։</p>
                    </div>

                    <div>
                        <h3>2025</h3>
                        <p>Նոր ծառայությունների և քարտերի ներկայացում։</p>
                    </div>

                    <div>
                        <h3>2023</h3>
                        <p>Նոր թվային հավելվածների զարգացում։</p>
                    </div>

                    <div>
                        <h3>2017</h3>
                        <p>Բանկը վերանվանվեց Evocabank-ի։</p>
                    </div>

                    <div>
                        <h3>1990</h3>
                        <p>Բանկի հիմնադրում։</p>
                    </div>
                </div>
            </section>

            <section className="mer-values">
                <span className="mer-label">04 — ՄԵՐ ԱՐԺԵՔՆԵՐԸ</span>

                <h2>Ինչն է մեզ առանձնացնում։</h2>

                <div className="mer-values-content">
                    <div>
                        <span>01</span>
                        <h3>Human-first</h3>
                        <p>Առաջին տեղում մարդիկ են։</p>
                    </div>

                    <div>
                        <span>02</span>
                        <h3>Նորարարություն</h3>
                        <p>Նորարարությունը մեր մտածելակերպն է։</p>
                    </div>

                    <div>
                        <span>03</span>
                        <h3>Դրական ազդեցություն</h3>
                        <p>Մենք ձգտում ենք ավելի լավ ապագայի։</p>
                    </div>
                </div>
            </section>

            <section className="mer-social">
                <span>05 — ՄԵՐ ՊԱՏԱՍԽԱՆԱՏՎՈՒԹՅՈՒՆԸ</span>
                <h2>Ավելի լավ ապագա՝ բոլորիս համար։</h2>
                <p>
                    Մենք աջակցում ենք կրթության, գիտության,
                    մշակույթի և նորարարության զարգացմանը։
                </p>
            </section>

        </main>
    );
}

export default Mermasin;