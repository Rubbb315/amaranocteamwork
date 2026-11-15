import './App.css'

const pages = [
  {
    path: '/hy/saving-account',
    title: 'Evoca խնայողական հաշիվ',
    image: 'https://www.evoca.am/images-cache/menu/1/17906902726456/780x585.png',
    intro: 'Ստացիր եկամուտ՝ պարզապես գումարդ պահելով խնայողական հաշվիդ վրա։',
  },
  {
    path: '/hy/account-opening-service',
    title: 'Հաշիվների բացում և սպասարկում',
    image: 'https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg',
    intro: 'Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ բանկային հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սակագների համաձայն։',
  },
  {
    path: '/hy/unallocated-metal-accounts',
    title: 'Առարկայազուրկ մետաղական հաշիվներ',
    image: 'https://www.evoca.am/images-cache/menu/1/17092121924185/780x585.png',
    intro: 'Առաջարկում ենք բացել առարկայազուրկ մետաղական հաշիվներ, որոնք նախատեսված են անկանխիկ ոսկու հաշվառման համար։',
  },
  {
    path: '/hy/remote-service-for-non-resident-clients',
    title: 'Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում',
    image: 'https://www.evoca.am/images-cache/menu/1/17510033256067/780x585.png',
    intro: 'Բանկ այցելելն այլևս պարտադիր չէ։ Անգամ եթե չեք բնակվում ՀՀ-ում, Evocabank-ի հետ Դուք կարող եք բացել հաշիվներ օնլայն եղանակով աշխարհի ցանկացած կետից և ցանկացած պահի։',
  },
]

function Header({ currentPath }) {
  return (
    <header className="site-header">
      <div className="top-header">
        <div className="header-inner">
          <a className="logo" href={pages[0].path}>
            evo<span>ca</span>
          </a>

          <nav className="main-nav">
            <a href="#">Անհատ</a>
            <a href="#">Բիզնես</a>
            <a href="#">Ակնթարթային վճարումներ</a>
            <a href="#">Մեր մասին</a>
            <a href="#">Նորություններ</a>
            <a href="#">Բլոգ</a>
            <a href="#">Կարիերա</a>
          </nav>

          <div className="languages">
            <a className="selected" href="#">ՀԱՅ</a>
            <a href="#">ENG</a>
            <a href="#">РУС</a>
          </div>
        </div>
      </div>

      <div className="contact-line">
        <div className="header-inner contact-inner">
          <div className="phones">
            <a href="tel:+37410605555">+374 10 605555</a>
            <a href="tel:+37498205555">+374 98 205555</a>
            <a href="tel:8444">8444</a>
          </div>

          <div className="header-actions">
            <button>Հետադարձ կապ</button>
            <button className="online-button">Առցանց հայտեր</button>
          </div>
        </div>
      </div>

      <div className="purple-nav">
        <nav className="product-nav">
          <a href="#">Վարկեր</a>
          <a href="#">Քարտեր</a>
          <a href="#">Ավանդներ</a>

          <div className="account-menu">
            <a
              className="account-link"
              href={pages[0].path}
            >
              Հաշիվներ <span>⌄</span>
            </a>

            <div className="dropdown">
              {pages.map((page) => (
                <a
                  key={page.path}
                  className={currentPath === page.path ? 'active' : ''}
                  href={page.path}
                >
                  {page.title}
                </a>
              ))}
            </div>
          </div>

          <a href="#">Փոխանցումներ</a>
          <a href="#">Արժեթղթեր</a>
          <a href="#">EvocaSALARY</a>
          <a href="#">EvocaTOUCH</a>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="logo footer-logo" href={pages[0].path}>
            evo<span>ca</span>
          </a>
          <p>Բանկային ծառայություններ՝ նորովի։</p>
        </div>

        <div className="footer-column">
          <h3>Բանկի մասին</h3>
          <a href="#">Մեր մասին</a>
          <a href="#">Ղեկավարություն</a>
          <a href="#">Բաժնետերեր</a>
          <a href="#">Հաշվետվություններ</a>
        </div>

        <div className="footer-column">
          <h3>Օգտակար հղումներ</h3>
          <a href="#">Հաճախ տրվող հարցեր</a>
          <a href="#">Գաղտնիության քաղաքականություն</a>
          <a href="#">Սակագներ</a>
          <a href="#">Կայքի քարտեզ</a>
        </div>

        <div className="footer-column">
          <h3>Կապ մեզ հետ</h3>
          <a href="tel:+37410605555">+374 10 605555</a>
          <a href="tel:8444">8444</a>
          <p>ք. Երևան, Հանրապետության 44/2</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Evocabank-ը վերահսկվում է Հայաստանի Հանրապետության
          Կենտրոնական բանկի կողմից։
        </p>
        <p>1990 - 2026 © ԲՈԼՈՐ ԻՐԱՎՈՒՆՔՆԵՐԸ ՊԱՇՏՊԱՆՎԱԾ ԵՆ</p>
      </div>
    </footer>
  )
}

function Section({ title, children }) {
  return (
    <section className="content-section">
      {title && <h2>{title}</h2>}
      {children}
    </section>
  )
}

function List({ items }) {
  return (
    <ul className="content-list">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

function SavingAccount() {
  return (
    <>
      <div className="intro-text">
        Գումարդ ավելանա՞, թե՞ միշտ հասանելի մնա։ Այլևս պետք չէ ընտրել։
        Evoca խնայողական հաշվի միջոցով կարող ես միաժամանակ և՛ խնայել,
        և՛ ավելացնել գումարդ, և՛ անհրաժեշտ պահին ունենալ դրա հասանելիությունը։
      </div>

      <div className="feature-grid">
        <div className="feature">
          <span className="feature-icon">↗</span>
          <h3>Գումարի աճ</h3>
          <p>Հաշվիդ դրական մնացորդի նկատմամբ տոկոսները հաշվարկվում են ամեն օր։</p>
        </div>

        <div className="feature">
          <span className="feature-icon">◷</span>
          <h3>Միշտ հասանելիություն</h3>
          <p>Փոխանցիր գումարդ Evocabank-ում գործող քո այլ հաշվին և օգտագործիր։</p>
        </div>

        <div className="feature">
          <span className="feature-icon">∞</span>
          <h3>Ոչ մի սահմանափակում</h3>
          <p>Չկա պարտադիր ժամկետ կամ համալրման նվազագույն գումար։</p>
        </div>

        <div className="feature">
          <span className="feature-icon">₳</span>
          <h3>Նախընտրելի արժույթ</h3>
          <p>Բացիր խնայողական հաշիվ ՀՀ դրամով, ԱՄՆ դոլարով կամ եվրոյով։</p>
        </div>
      </div>

      <Section title="Ինչո՞ւ սկսել գումար կուտակել հենց այսօր">
        <List items={[
          'Հաշվի բացումն ու սպասարկումն անվճար են։',
          'Բացման և համալրման նվազագույն գումար չկա։',
          'Գործարքի նվազագույն չափ չկա։',
          'Խնայելու պարտադիր ժամկետ չկա։',
          'Հաշիվը կարող ես համալրել ցանկացած պահի՝ Evocabank-ում գործող քո այլ հաշվից։',
        ]} />
      </Section>

      <div className="rate-banner">
        <div>
          <p>Ստացիր մինչև</p>
          <strong>5.09%</strong>
          <p>տարեկան տոկոսային եկամտաբերություն</p>
        </div>
      </div>

      <Section title="ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ">
        <h3 className="subheading">Անհրաժեշտ փաստաթղթեր</h3>
        <List items={[
          'Հաշվի բացման դիմում։',
          'Մեր պահանջով այլ փաստաթղթեր։',
        ]} />

        <h3 className="subheading">Երաշխավորված ավանդների սահմանաչափերը</h3>
        <p>
          Համաձայն «Ֆիզիկական անձանց բանկային ավանդների հատուցումը
          երաշխավորելու մասին» ՀՀ օրենքի՝ բանկում բացված խնայողական
          հաշվի վրա գտնվող դրամական միջոցները համարվում են բանկային ավանդ։
        </p>
        <List items={[
          'Միայն դրամային ավանդի երաշխավորված չափը 16 միլիոն դրամ է։',
          'Միայն արտարժութային ավանդի երաշխավորված չափը 7 միլիոն դրամ է։',
        ]} />
      </Section>

      <Section title="Խնայողական հաշիվների սպասարկում">
        <p>
          Հաշիվների սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը
          և մասնաճյուղերը։ Հաշիվների վարման սպասարկումն անվճար է։
          Հաշվի չնվազող մնացորդի պահանջ սահմանված չէ։
        </p>
        <List items={[
          'Հաշվի անկանխիկ համալրում՝ փոխանցում Evocabank-ում գործող քո այլ բանկային հաշիվներից։',
          'Հաշվից անկանխիկ ելքագրում՝ փոխանցում դեպի Evocabank-ում գործող քո այլ բանկային հաշիվներ։',
          'Բանկային հաշիվներով արտարժույթի փոխարկում։',
        ]} />
      </Section>

      <Section title="Հաշիվ բացելու ընթացակարգ">
        <List items={[
          'Հաշիվը կարող ես բացել դրամով, դոլարով և եվրոյով։',
          'Խնայողական հաշիվները կարող ես բացել ինչպես մասնաճյուղում, այնպես էլ հեռակառավարման համակարգերի միջոցով։',
          'Փաստաթղթերի ստուգումից հետո հաշիվը բացվում է 1 աշխատանքային օրվա ընթացքում։',
        ]} />
      </Section>
    </>
  )
}

function AccountOpening() {
  return (
    <>
      <Section title="ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ">
        <h3 className="subheading">Անհրաժեշտ փաստաթղթեր</h3>
        <List items={[
          'Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն։',
          'Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ։',
          'Մեր պահանջով այլ փաստաթղթեր։',
        ]} />

        <h3 className="subheading">Հաշիվ բացելու ընթացակարգ</h3>
        <List items={[
          'Ընթացիկ հաշիվ կարող ես բացել դրամով, դոլարով, եվրոյով, ռուբլով, կանադական դոլարով, ֆրանկով և ֆունտ ստեռլինգով։',
          'Մեր աշխատակիցները կտեղեկացնեն հաշվի բացման և սպասարկման պայմանների, սակագների ու պահանջվող փաստաթղթերի մասին։',
          'Լրացնում ես դիմում և ներկայացնում պահանջվող փաստաթղթերը։',
          'Բանկը կարող է պահանջել լրացուցիչ փաստաթղթեր։',
          'Փաստաթղթերի ստուգումից հետո հաշիվը բացվում է 1 աշխատանքային օրվա ընթացքում։',
          'Հաշիվները կարող ես բացել մասնաճյուղում կամ հեռակառավարման համակարգերի միջոցով։',
        ]} />
      </Section>

      <Section title="Բանկային հաշիվների սպասարկում">
        <p>
          Բանկային հաշիվների սպասարկումն իրականացնում են գլխամասային
          գրասենյակը և մասնաճյուղերը՝ աշխատանքային օրերին ժամը 9:30-17:00։
          Բանկային հաշիվների վարման սպասարկումն անվճար է։
        </p>
        <List items={[
          'Բացված հաշվին մուտքագրել դրամական միջոցներ։',
          'Կատարել հաշվից փոխանցումներ։',
          'Հաշվից գումարներ ստանալ։',
          'Ընթացիկ հաշվի մնացորդը փոխարկել արտարժույթի։',
          'Ընթացիկ հաշվից մարել վարկեր։',
        ]} />
      </Section>
    </>
  )
}

function MetalAccounts() {
  return (
    <>
      <Section title="Հիմնական պայմաններ">
        <List items={[
          'Հաշիվներ ենք բացում ռեզիդենտ և ոչ ռեզիդենտ հաճախորդների համար՝ միայն 999.9 հարգի ոսկով։',
          'Հաշիվների համար նվազագույն մնացորդի պահանջ սահմանված չէ։',
          'Անկախիկ ոսկի կարելի է գնել սկսած 31 գրամից։',
          'Ոսկու գնանշումը կատարվում է գրամով և կախված է միջազգային շուկայում ոսկու գնից։',
          'Անկախիկ ոսկին հաշվառվում է դրամով և կշռային արտահայտությամբ՝ 0.01 գրամ ճշտությամբ։',
        ]} />
      </Section>

      <Section title="Հաշիվներով իրականացվող գործառնություններ">
        <List items={[
          'Հաշվի համալրում՝ բանկից անկանխիկ ոսկի գնելու և այն հաշվին մուտքագրելու միջոցով։',
          'Այլ անձի մետաղական հաշվից անկանխիկ ոսկի փոխանցելու միջոցով համալրում։',
          'Հաշվին առկա անկանխիկ ոսկին բանկին վաճառելու միջոցով ելքագրում։',
          'Անկախիկ ոսկու փոխանցում նույն կամ այլ բանկում գործող մետաղական հաշվին։',
          'Մետաղական հաշիվները կարող են գրավադրվել։',
        ]} />
      </Section>

      <Section title="Հաշիվ բացելու համար անհրաժեշտ փաստաթղթեր">
        <List items={[
          'Դիմում՝ մեր ձևանմուշի համաձայն։',
          'Անձնագիր և սոցիալական քարտ կամ այն չունենալու մասին տեղեկանք, կամ միայն նույնականացման քարտ։',
          'Մեր պահանջով այլ փաստաթղթեր։',
        ]} />
        <p className="notice">
          Ուշադրություն․ Ավանդների հատուցումը երաշխավորող հիմնադրամը
          չի հատուցում մետաղական հաշիվները։
        </p>
      </Section>
    </>
  )
}

function NonResident() {
  return (
    <>
      <div className="intro-text">
        24/7 անձնական մենեջեր, ֆինանսական ծառայությունների հասանելիություն
        աշխարհի ցանկացած կետից, փաստաթղթերի անվճար առաքում Ձեր գտնվելու վայր։
        Բոլոր մանրուքները մտածված են, որ Դուք խնայեք Ձեր ժամանակը։
        Ուղարկեք փաստաթղթերը, անցեք տեսազանգով նույնականացում և բացեք
        Ձեր հաշիվը՝ առանց Բանկ այցելելու։
      </div>

      <Section title="ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ">
        <h3 className="subheading">Առավելություններ</h3>

        <div className="feature-grid">
          <div className="feature">
            <h3>Prime կարգավիճակ Բանկում</h3>
            <p>Բացառիկ արտոնություններ, առաջնահերթ սպասարկում և ժամանակի խնայում։</p>
          </div>
          <div className="feature">
            <h3>Անհատական մենեջեր / Անձնական օգնական</h3>
            <p>24/7 աջակցություն ֆինանսական ցանկացած հարցում։</p>
          </div>
          <div className="feature">
            <h3>Հեռավար սպասարկում</h3>
            <p>Ծառայությունների հասանելիություն առցանց՝ աշխարհի ցանկացած կետից։</p>
          </div>
          <div className="feature">
            <h3>Փաստաթղթերի անվճար առաքում</h3>
            <p>Առաքում անմիջապես Ձեր գտնվելու վայր՝ Ձեզ հարմար պահի։</p>
          </div>
        </div>

        <h3 className="subheading">Ֆիզիկական անձանց հաշվի բացման պայմաններ</h3>
        <List items={[
          'Հանդիսանում են ՀՀ-ում գտնվող անշարժ գույքի սեփականատեր և ունեն սեփականության իրավունքի գրանցման վկայական։',
          'Պատրաստ են ներդնել նվազագույնը 6 ամիս ժամկետով՝ առնվազն 20 000 ԱՄՆ դոլար, 20 000 Եվրո, 1 500 000 ՌԴ ռուբլի կամ 10 000 000 ՀՀ դրամ համարժեք ավանդ։',
          'ՀՀ-ում գրանցված են որպես անհատ ձեռնարկատեր։',
          'Հանդիսանում են ՀՀ-ում գրանցված իրավաբանական անձի մասնակից կամ բաժնետեր։',
        ]} />
      </Section>

      <Section title="Ֆիզիկական անձանց հաշվի բացման անհրաժեշտ փաստաթղթեր">
        <List items={[
          'Անձնագիր։',
          'Միջազգային անձնագիր։',
          'Եկամուտների ծագման աղբյուրը հաստատող փաստաթուղթ։',
        ]} />
      </Section>

      <Section title="Իրավաբանական անձանց փաստաթղթերի ցանկ">
        <List items={[
          'Կանոնադրություն կամ դրան փոխարինող այլ փաստաթուղթ։',
          'Պետական ռեգիստրի գրանցման վկայական։',
          'Հարկ վճարողի հաշվառման համարը, եթե այն բացակայում է վկայականում։',
          'Գործադիր մարմնի ղեկավարի և գլխավոր հաշվապահի անձը հաստատող փաստաթղթեր։',
          'Հաշվետերերի անձնագրեր կամ նույնականացման քարտեր։',
        ]} />
        <h3 className="subheading">Շահառուների համար անհրաժեշտ է</h3>
        <List items={[
          'Ֆիզիկական անձ շահառուի անձնագրի կամ նույնականացման քարտի պատճեն։',
          'Իրավաբանական անձ շահառուի գրանցման փաստաթղթերի պատճեններ։',
          'Ընկերության վերջին մեկ տարվա ֆինանսական հաշվետվություններ և աուդիտորական եզրակացություն։',
          'Լիցենզիա, եթե ընկերության գործունեությունը պահանջում է։',
        ]} />
      </Section>

      <Section title="Սակագներ">
        <div className="tariff-grid">
          <div className="tariff-card">
            <h3>Ֆիզիկական անձանց համար</h3>
            <p><span>Հաշվի բացում</span><strong>50,000 դրամ</strong></p>
            <p><span>Տարեկան սպասարկում</span><strong>250,000 դրամ</strong></p>
            <p><span>Փակման վճար</span><strong>0 դրամ</strong></p>
            <p><span>Անկանխիկ մուտքագրում</span><strong>0.5%</strong></p>
            <p><span>Հաճախորդների փոխանցումներ</span><strong>0.5%</strong></p>
            <small>USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</small>
          </div>

          <div className="tariff-card">
            <h3>Իրավաբանական անձանց համար</h3>
            <p><span>Հաշվի բացում</span><strong>100,000 դրամ</strong></p>
            <p><span>Տարեկան սպասարկում</span><strong>500,000 դրամ</strong></p>
            <p><span>Փակման վճար</span><strong>0 դրամ</strong></p>
            <p><span>Անկանխիկ մուտքագրում</span><strong>0.5%</strong></p>
            <p><span>Հաճախորդների փոխանցումներ</span><strong>0.5%</strong></p>
            <small>USD, EUR, RUB, AED, GBP, CHF, CNY, CAD</small>
          </div>
        </div>
      </Section>

      <Section title="Հաշվի բացման փուլեր">
        <div className="step">
          <span>01</span>
          <div>
            <h3>Փաստաթղթերի ուղարկում</h3>
            <p>Ուղարկեք անհրաժեշտ փաստաթղթերը՝ <a href="mailto:primeonline@evoca.am">primeonline@evoca.am</a> հասցեին։</p>
          </div>
        </div>

        <div className="step">
          <span>02</span>
          <div>
            <h3>Առցանց նույնականացում տեսազանգով</h3>
            <p>
              Փաստաթղթերի ամբողջական փաթեթը ստանալուց հետո Բանկը
              կտեղեկացնի տեսազանգի անցկացման կարգի մասին։
              Դրական որոշումից հետո անհրաժեշտ է այլ բանկում գործող
              հաշվից առնվազն 50 ԱՄՆ դոլար փոխանցել Evocabank-ում
              Ձեր անունով բացված հաշվին։
            </p>
          </div>
        </div>

        <div className="step">
          <span>03</span>
          <div>
            <h3>Կապ մեզ հետ</h3>
            <p>
              Հարցերի դեպքում կարող եք գրել
              <a href="mailto:primeonline@evoca.am"> primeonline@evoca.am</a>
              հասցեին կամ զանգահարել +374 33 625555 հեռախոսահամարին։
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}

function App() {
  const currentPath = window.location.pathname
  const page = pages.find((item) => item.path === currentPath) || pages[0]

  function renderContent() {
    if (page.path === pages[0].path) return <SavingAccount />
    if (page.path === pages[1].path) return <AccountOpening />
    if (page.path === pages[2].path) return <MetalAccounts />
    return <NonResident />
  }

  return (
    <>
      <Header currentPath={currentPath} />

      <main className="page-container">
        <div className="breadcrumb">
          <a href="#">Գլխավոր</a>
          <span>/</span>
          <a href={pages[0].path}>Հաշիվներ</a>
          <span>/</span>
          <span>{page.title}</span>
        </div>

        <section className="hero">
          <div className="hero-content">
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>

          <div className="hero-image">
            <img src={page.image} alt={page.title} />
          </div>
        </section>

        <div className="page-content">
          {renderContent()}

          <Section title="Փաստաթղթեր">
            <div className="document-row">
              <span className="pdf-icon">PDF</span>
              <p>Համալիր բանկային ծառայությունների մատուցման պայմաններ</p>
              <a
                href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Դիտել →
              </a>
            </div>
          </Section>

          <section className="mobile-banking">
            <div>
              <h2>Օնլայն և մոբայլ բանկինգ</h2>
              <p>
                Evocabank-ը արագ, պարզ և նորարար ծառայություններ մատուցող
                բանկ է, որն առանձնանում է տեղեկատվական նորագույն
                տեխնոլոգիաների ակտիվ կիրառմամբ։
              </p>
            </div>
            <div className="qr-area">
              <img
                src="https://www.evoca.am/images-cache/banners/1/16136269557179/101x101.png"
                alt="QR code"
              />
              <p>Ներբեռնել հավելվածները</p>
            </div>
          </section>
        </div>

        <div className="other-pages">
          <h2>Հաշիվներ</h2>
          <div className="other-pages-grid">
            {pages.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={item.path === page.path ? 'current' : ''}
              >
                {item.title}
                <span>→</span>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App