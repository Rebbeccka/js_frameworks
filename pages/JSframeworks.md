
# JavaScript Frameworks
### Zjednodušený webový vývoj


---

## Čo je JavaScript framework ?
Kolekcia vopred napísaného, ​​štandardizovaného JavaScript kódu a ďalších nástrojov, ktoré vývojári používajú na zjednodušenie a urýchlenie rutinných úloh.


### Čo môže byť súčasťou frameworku ?

- **Knižnice a moduly**
- **UI Komponenty**
- **Routing systém**
- **State management**
- **Dokumentácia**
- **Komunita**
---

![popularity](https://www.codica.com/static/f43531a22c330caaa7b5861f033c53f3/0523d/Most_used_web_frameworks_among_developers_worldwide_as_of_2022_min_32c29a2d8c.jpg)

## Framework vs knižnica
Framework a knižnica sú často zamieňané pojmy, ktoré používame na označenie rovnakých vecí,
ALE ..
| Framework |  Library       |
|---------------|------------|
| Obsahuje množstvo API, kompilátorov, podporných programov, knižníc atď.  | Kolekcia pomocných modulov, tried, objektov, funkcií, vopred napísaného kódu atď. |
|Je ťažké ho nahradiť  | Knižnicu je možné jednoducho nahradiť inou |
|Vývoj vyžaduje veľa kódu, ktorý znižuje výkon a zvyšuje čas načítania.| Vytvorenie vyžaduje menej kódu|
|Nemožné začlenenie do existujúceho projektu |Jednoduchá integrácia do existujúcich projektov a pridanie niektorých špecifických funkcii|

##
![image1](https://scrimba.com/articles/content/images/2022/12/library-versus-framework-diagram.png "Framework vs library")



## Frontendové Javascript frameworky

- **React**, **Vue**, **Angular**, Backbone,  Svelte, ...


![jobsperframework](https://distantjob.com/wp-content/uploads/2023/05/Best-javascript-frameworks-1024x743.png)
---
![React Logo](https://www.vectorlogo.zone/logos/reactjs/reactjs-ar21.svg)

-  architektúra založená na **komponentoch**
- jednoduchá integrácia
- **jednosmerný tok dát**
- jednoduchšia syntax vďaka **JSX** (JavaScript XML)
- **virtuálny DOM** (Document Object Model)
- rýchlejší rendering, veľká výkonnosť
- aktívna a podporujúca komunita
- vhodný pre začiatočníkov

---
### Nevýhody Reactu:

- vyžaduje **štruktúru a konvenciu**
-  môže byť ťažko skombinovateľný s iným JS kódom
-  rýchle zmeny
- nedostatočná dokumentácia
- **strmšia krivka učenia**, príliš **komplexný**

## Komponenty
 - základný  stavebný kameň každého React projektu
 - umožňujú rozdeliť UI na menšie, izolované časti, ktoré je možné opakovane používať
 - môžu prijať **props** (hodnoty, ktoré im rodičovská komponenta odovzdá)
 - sú **immutable**- komponenty nemôžu meniť hodnoty, ktoré dostanú cez props


![components](https://www.adcisolutions.com/sites/default/files/styles/scale_w770/public/2022-09/table_1.jpg.webp?itok=r6bjjEm8)

---
*Funkcionálne komponenty*
- **bezstavové**, zameriavajú sa na prezentáciu prvkov UI
- **jednoduché funkcie**, prijímajú **vstupy (props)** a vracajú **JSX**
- ideálne pre scenáre, kde je zložitosť zbytočná

*Triedne komponenty*
- zavádzajú **výkon** a **dynamiku** do aplikácií
- môžu riadiť stav, vhodné pre komponenty vyžadujúce dynamické správanie a interakciu


## React girls
- komunita zameraná na frontend a ženy v IT
- pravidelné meetupy (3.štvrtok v mesiaci) na rôzne témy z oblasti vývoja, soft skills a webdesignu
<p align="center">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65lAGHGNCaTP5AYj2TuQ7L1E5tCO6PvzfmQ&s" alt="Popis obrázka" />
</p>

---
![Vue Logo](https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg)

- skrátene **Vue**
- kombinuje rôzne aspekty iných frameworkov
- **flexibilný**
- **prístupný** vďaka detailnej dokumentácii
- jednoduchá integrácia
- ľahko pochopiteľný, **jemná krivka učenia**
 - dobrá voľba pre rýchly vývoj a vytváranie škálovateľných webových aplikácií v reálnom čase
 - **efektívny** pri menších a stredne veľkých projektoch
 - aktívna komunita, množstvo pluginov a nástrojov

---

### Nevýhody Vue:
- časté aktualizácie
- dokumentácia niekedy zaostáva za vývojom
- nízka popularita medzi korporátnymi zamestnávateľmi
- problémy s niektorými prehliadačmi (väčšinou Safari)
- menšia komunita ako React alebo Angular

---
![Angularlogo](https://www.vectorlogo.zone/logos/angular/angular-ar21.svg)
- dvojcestná väzba dát (Two-way Data Binding)
- modulárna architektúra
- používa **komponenty**
- komplexný ("all-in-one" framework)
- **MVC** architektúra (Model-View-Controller)
- vhodný na vytváranie **robustných jednostránkových aplikácií**  a rozsiahle projekty
- veľká komunita (Google)
---

### Nevýhody:
- zložitosť, strmá krivka učenia
- problém s výkonom, pomalé načitanie stránok
- málo flexibilný


## JavaScript frameworks pre mobilné aplikácie
![nativereact](https://upload.vectorlogo.zone/logos/reactnativedev/images/199b2976-954e-4e42-8d79-12a784e2cdf9.svg)
![flutter](https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg)

---

## Backendovy vyvoj
Je logika za webovimi applikacianmi, ktorá nebeží na strane klienta
Hlavné problémy, ktoré rieši
- správa requestov(hlavne HTTPS)
- procesovanie a pre-renderovanie dát
- komunikácia a organizácia databáz
- autentifikacia a autorizacia dat
- vývoj apíčiek
- správa microservisov

---

### Komunikácia s frontendom

***REST API** (Representational State Transfer) je široko používaný architektonický štýl
na navrhovanie webových aplikácií. Spolieha sa na bezstavovú komunikáciu klient-server,
zvyčajne cez HTTP.
V JavaScript vývoji backendu sa REST API implementujú, aby umožnili
frontendovej časti komunikovať so serverom, načítavať dáta a posielať aktualizácie.

***GraphQL*** je alternatíva k REST, ktorá poskytuje flexibilnejší a efektívnejší spôsob
dopytovania dát. Namiesto viacerých koncových bodov používa GraphQL jeden koncový bod,
kde klienti môžu presne špecifikovať, aké dáta potrebujú. To môže znížiť množstvo dát
prenášaných cez sieť a zlepšiť výkon aplikácií.


---

### Runtime
***Node.js**: JavaScript runtime postavené na JavaScript engine Chrome V8.
Je to najpopulárnejšia voľba pre vývoj backendu, známa svojou neblokujúcou, udalosťami riadenou architektúrou.
•	***Deno***: Vytvorené Ryanom Dahlom, pôvodným tvorcom Node.js, Deno rieši niektoré nedostatky Node.js
, ako sú bezpečnostné problémy a správa závislostí.
•	***Bun***: Novší runtime, ktorý sa snaží byť rýchlejší ako Node.js a Deno, s dôrazom na výkon a skúsenosti
vývojárov. Obsahuje vstavaný bundler, transpiler a správcu balíčkov. Je napísaný v Zigu

---

### Komunikácia s databázami

•	SQL databázy: Knižnice ako Sequelize a Knex.js poskytujú ORM (Object-Relational Mapping) schopnosti pre
SQL databázy, ako sú PostgreSQL, MySQL a SQLite.
•	NoSQL databázy: Pre databázy ako MongoDB je populárnou voľbou Mongoose, ktorá ponúka riešenia založené
na schémach pre modelovanie aplikačných dát.
•	Grafové databázy: Neo4j je možné prístupovať pomocou Neo4j JavaScript drivera, vhodného pre aplikácie
vyžadujúce komplexné modelovanie vzťahov.

---

### Populárne backendové frameworky
***Express.js***: Minimálicticky a flexibilný framework pre webové aplikácie v Node.js,
ktorý poskytuje robustnú sadu funkcií pre webové a mobilné aplikácie. Je známy pre svoju
jednoduchosť a ľahkosť použitia.

---

### Ďalšie úvahy k backendu
***Serverless architektúra***: Platformy ako AWS Lambda, Azure Functions a Google Cloud Functions
umožňujú vývojárom spúšťať kód bez správy serverov, pričom sa sústredia na písanie obchodnej logiky.

***Mikroservicies***: Rozdelenie aplikácií na menšie, nezávislé služby môže zlepšiť škálovateľnosť a
udržateľnosť. Ľahká povaha JavaScriptu ho robí vhodným pre architektúru mikroslužieb.

***Bezpečnosť***: Implementácia bezpečnostných najlepších praktík, ako je validácia vstupov,
šifrovanie dát a bezpečné overovanie, je kľúčová v backendovom vývoji.

---

## Fullstack Development

- Fullstack JavaScript frameworks provide tools to build both the frontend and backend of an application using a single language, JavaScript.
- They unify development workflows and reduce the need for switching between languages or environments.

---

### Advantages

- Single Language: Developers only need to learn JavaScript for the entire stack.
- Code Sharing: Share business logic and utilities between frontend and backend.
- Efficiency: Faster development cycles with streamlined workflows.
- Scalability: Many frameworks support serverless deployments and cloud-native architecture.

---

### Components of a Fullstack Framework

- Frontend Tools: Built-in routing, state management, and templating for interactive UIs.
- Backend Features: Server rendering, REST/GraphQL API generation, and middleware.
- Database Integration: Direct integration with databases like MongoDB, PostgresQL, etc.

---

### Real-World Applications

- Enterprise applications requiring real-time features.
- Static websites with dynamic components.
- Full-fledged SPAs (Single Page Applications) and PWAs (Progressive Web Apps).

---

## Self-Serve Creation and Deployment

- Many modern JavaScript frameworks offer self-serve tools that simplify app creation and deployment without requiring extensive DevOps knowledge.
- These tools help developers quickly set up, build, and deploy applications.

---

### Key Features

- CLI Tools: Command-line tools like create-next-app or vue-cli for scaffolding projects with best practices.
- Boilerplates: Pre-configured templates to jumpstart projects.
- Hosting Integration: Easy deployment to platforms like Vercel, Netlify, AWS, or Firebase.
- Dev Tools: Built-in debugging, testing, and live-reloading for development convenience.

---

### Benefits of Self-Serve

- Speed: Developers can deploy apps in minutes with minimal setup.
- Accessibility: No need for deep cloud infrastructure knowledge.
- Flexibility: Supports both static and dynamic deployments.
- Scalability: Handle small projects to enterprise-grade apps effortlessly.

---

### Examples of Self-Serve Applications

- A startup building and deploying a new MVP using Next.js and Vercel.
- Personal portfolio websites hosted on Netlify.
- Educational or community apps built with React and deployed on Firebase.

---

## Prečo si vybrať?

### Key Benefits
1. **Improved Productivity**
    - Avoid reinventing the wheel.
2. **Better Code Organization**
    - Modular and maintainable structure.
3. **Cross-Platform Development**
    - Many frameworks support web, mobile, and desktop development.

---

## Ako si vybrať?

### Considerations
- **Project Requirements**: Small apps vs. enterprise solutions.
- **Learning Curve**: Developer experience with tools like TypeScript or JSX.
- **Community Support**: Active communities ensure better libraries and resources.

---

## Zhrnutie
- JavaScript frameworks simplify the development process.
- Choosing the right framework depends on project goals and team expertise.
- Explore and experiment with different frameworks to find the best fit.

---

## Otázky?

- Thank you for your attention!
