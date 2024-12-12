
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
| Framework |  Knižnica      | 
|---------------|------------|
| Obsahuje množstvo API, kompilátorov, podporných programov, knižníc atď.  | Kolekcia pomocných modulov, tried, objektov, funkcií, vopred napísaného kódu atď. | 
|Je ťažké ho nahradiť  | Knižnicu je možné jednoducho nahradiť inou | 
|Vývoj vyžaduje veľa kódu, ktorý znižuje výkon a zvyšuje čas načítania.| Vytvorenie vyžaduje menej kódu|
|Nemožné začlenenie do existujúceho projektu |Jednoduchá integrácia do existujúcich projektov a pridanie niektorých špecifických funkcii|

## 
![image1](https://scrimba.com/articles/content/images/2022/12/library-versus-framework-diagram.png "Framework vs library")



## Frontendové JS frameworky

- **React**, **Vue**, **Angular**, Backbone,Ember, ...


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
---

## JavaScript frameworks pre mobilné aplikácie 
![nativereact](https://upload.vectorlogo.zone/logos/reactnativedev/images/199b2976-954e-4e42-8d79-12a784e2cdf9.svg)
![flutter](https://www.vectorlogo.zone/logos/flutterio/flutterio-ar21.svg)



### Backend Frameworks
- **Node.js** (runtime prostredie)
- **Express.js** (minimalistický backend framework)
- **Next.js** (založený na Reacte)
- **NestJS** (škálovateľný framework)

---

## Fullstack 

- Fullstack frameworky JavaScriptu poskytujú nástroje na vytvorenie frontendu aj backendu aplikácie pomocou jediného jazyka, JavaScriptu.
- Zjednocujú vývoj a redukujú potrebu striedania jazykov alebo prostredí.

---

### Výhody

- Jediný jazyk: Vývojári stačí iba JavaScript pre celý stack
- Zdieľanie kódu: Umožňuje udieľanie logiky a nástrojov medzi frontendom a backendom
- Efektivita: Rýchlejší vývoj a efektívny workflow
- Škálovateľnosť: Mnohé frameworky podporujú deployments bez servera a cloudovú natívnu architektúru

---

### Komponenty 

- Frontend Tools: Vstavaný routing, správa stavu a šablóny pre interaktívne používateľské rozhrania
- Funkcie backendu: rendering servera, generovanie REST/GraphQL API a middleware
- Integrácia databázy: Priama integrácia s databázami ako MongoDB, PostgresQL atď

---

### Aplikácie

- Podnikové aplikácie vyžadujúce funkcie v reálnom čase
- Statické webové stránky s dynamickými komponentmi
- Plnohodnotné SPA (jednostránkové aplikácie) a PWA (progresívne webové aplikácie).

---

## Self-Serve Creation and Deployment

- Mnoho moderných JS frameworkov ponúka self-serve nástroje, ktoré zjednodušujú vytváranie aplikácií bez toho, aby si vyžadovali rozsiahle znalosti DevOps
- Tieto nástroje pomáhajú vývojárom rýchlo nastaviť a nasadiť aplikácie

---

### Kľúčové vlastnosti

- Nástroje CLI: Nástroje príkazového riadka, ako napríklad create-next-app alebo vue-cli na vytváranie projektov osvedčenými postupmi
- Boilerplates: Vopred nakonfigurované šablóny na okamžité spustenie projektov
- Integrácia hostingu: Jednoduché nasadenie na platformy ako Vercel, Netlify, AWS alebo Firebase
- Vývojárske nástroje: Vstavané ladenie, testovanie a živé opätovné načítanie pre pohodlie vývoja

---

### Výhody self-serve

- Rýchlosť: Vývojári môžu nasadiť aplikácie v priebehu niekoľkých minút
- Dostupnosť: Nie sú potrebné hlboké znalosti cloudovej infraštruktúry
- Flexibilita: Podporuje statické aj dynamické nasadenia
- Škálovateľnosť: Bez námahy zvládajte malé projekty až po aplikácie podnikovej úrovne

---

### Príklady samoobslužných aplikácií

- Spustenie vytvárania a nasadzovania nového MVP pomocou Next.js a Vercel
- Webové stránky osobného portfólia na Netlify.
- Vzdelávacie alebo komunitné aplikácie vytvorené pomocou React a nasadené na Firebase

---

## Kľúčové výhody Frameworkov 
1. **Vylepšená produktivita**
2. **Lepšia organizácia kódu**
 - modulárna a udržiavateľná štruktúra.
3. **Vývoj viacerých platforiem**
 - mnohé podporujú vývoj pre web, mobilné zariadenia aj počítače.

---

## Ako si vybrať?
- **Požiadavky projektu**: Malé aplikácie vs. podnikové riešenia
- **Krivka učenie**: Skúsenosti s nástrojmi ako TypeScript alebo JSX
- **Podpora komunity**: Aktívne komunity zabezpečujú lepšie knižnice a zdroje

---

## Zhrnutie
- JavaScriptové frameworky zjednodušujú proces vývoja
- Sorávny výber závisí od cieľov projektu a odbornosti tímu
- Experimentujte s rôznymi frameworkami, aby ste našli ten najvhodnejší pre Vás
---

<center>
  <h1 style="font-size: 3em;">Ďakujeme za pozornosť!</h1>
</center>

