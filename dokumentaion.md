Dokumentation för 'Webbshop' - Kursprojekt

Projektöversikt
Denna React-baserade e-handelsplattform är utvecklad som ett kursprojekt på Företagsuniversitetet. Plattformen inkluderar alla grundläggande funktioner för en modern webbshop: produktvisning, varukorg, kassaprocess och orderbekräftelse.

Teknisk Stack

- Frontend: React.js (v18+)
- Routing: React Router (v6)
- Tillståndshantering: React Context API
- Styling: SCSS-moduler
- HTTP-klient: Axios
- Animationer: Framer Motion
- Ikoner: React Icons (Font Awesome)

4. Installation & Start
   Krav

- Node.js (v16+)
- npm

Steg-för-steg

Klona repot:

- git clone webshop
- cd webshop

Installera beroenden:

- npm install

Starta utvecklingsservern:

- npm start
- Appen öppnas automatiskt på http://localhost:3000.

Komponentträd
src/  
├── components/  
│ ├── Cart.jsx  
│ ├── CartItem.jsx  
│ ├── Checkout.jsx  
│ ├── Footer.jsx  
│ ├── Header.jsx  
│ ├── Product.jsx  
│ └── ProductList.jsx  
├── context/  
│ └── CartContext.js  
├── pages/  
│ ├── CheckoutPage.jsx  
│ ├── HomePage.jsx  
│ ├── ProductPage.jsx  
│ └── WelcomePage.jsx  
├── services/  
│ └── api.js  
└── styles/  
 ├── App.scss  
 ├── Footer.scss  
 └── WelcomePage.scss

Projektstruktur
Huvudfiler:
index.js - Applikationsingångspunkt
App.js - Huvudkomponent med router-konfiguration
App.scss - Globala stilar

Kontext
CartContext.js - Hanterar varukorgens tillstånd och funktionalitet

API
api.js - Kommunikation med backend (dummyjson.com)

Sidkomponenter
WelcomePage.jsx - Ingångssida med animationer
HomePage.jsx - Produktlista
ProductPage.jsx - Produktdetaljer
CheckoutPage.jsx - Kassaprocess

Delade Komponenter
Header.jsx - Navigeringsfält med varukorgsindikator
Footer.jsx - Sidfot med kontaktinformation
ProductList.jsx - Visar produktgrid
Product.jsx - Enskild produktvisning
Cart.jsx - Varukorgsöversikt
CartItem.jsx - Enskild varukorgsprodukt
Checkout.jsx - Beställningssammanfattning

Stilfiler
index.scss - Grundläggande reset
WelcomePage.scss - Stilar för välkomstsidan
Footer.scss - Stilar för sidfoten

Funktionalitetsbeskrivning

1. Produktvisning
   HomePage: Visar alla produkter i ett responsivt grid
   ProductPage: Visar detaljerad information om en produkt
   API-anrop: Hämtar data från dummyjson.com

2. Varukorgssystem
   Lägg till/ta bort produkter: Hanteras via CartContext
   Kvantitetsjustering: Möjlighet att ändra antal i varukorgen
   Totalprisberäkning: Uppdateras automatiskt

3. Kassaprocess
   Steg 1: Varukorgsöversikt
   Steg 2: Kundinformationsformulär
   Steg 3: Orderbekräftelse

4. Användargränssnitt
   Responsiv design: Anpassas efter skärmstorlek
   Animationer: Förbättrad användarupplevelse
   Feedback: Laddningsindikatorer och felmeddelanden
   Teknisk Dokumentation

CartContext.js
Hanterar all varukorgslogik med följande funktioner:
addToCart: Lägger till produkt eller uppdaterar kvantitet
removeFromCart: Tar bort produkt helt
updateQuantity: Ändrar antal för specifik produkt
clearCart: Tömmer hela varukorgen
totalPrice: Beräknar totalpris

API-modul (api.js)
Två huvudfunktioner:
fetchProducts(): Hämtar alla produkter
fetchProductById(id): Hämtar specifik produkt

Routing (App.js)
Definierar följande routes:
/: Välkomstsida
/home: Produktlista
/product/:id: Produktdetaljer
/checkout: Kassaprocess

Testinstruktioner
Välkomstsida:
Kontrollera animationer
Testa "Handla nu"-knappen

Produktsida:
Verifiera att alla produkter laddas
Testa sortering/filtrering (om implementerat)

Produktdetaljer:
Testa kvantitetsväljare
Verifiera "Lägg till i varukorg"-funktion

Varukorg:
Testa att lägga till/ta bort produkter
Verifiera kvantitetsändringar
Kontrollera totalprisberäkning

Kassan:
Testa formulärvalidering
Verifiera orderbekräftelse
Kontrollera att varukorgen töms efter beställning

Kända Begränsningar
Ingen persistent lagring (varukorgen försvinner vid uppdatering)
Begränsad felhantering i API-anrop
Saknar sök- och filterfunktioner
Ingen användarautentisering

Framtida Förbättringar
LocalStorage: Spara varukorgen mellan sessioner
Betalningsintegration: Lägg till Stripe/Klarna
Sök/filtrering: Förbättra produktbläddring
Användarkonton: Möjlighet att spara kundinformation
Orderhistorik: Visa tidigare beställningar

Projektets Tekniska Kvalitéter
Modulär Arkitektur: Tydlig separation av ansvar
Kodåteranvändning: Delade komponenter och funktioner
Responsiv Design: Fungerar på alla skärmstorlekar
Tillgänglighet: Grundläggande ARIA-stöd
Prestanda: Optimerad rendering med React

Bifogade Filer
Alla komponentfiler (.jsx)
Stilfiler (.scss)
Kontext- och API-filer
Huvudkonfigurationsfiler

Slutsats
Denna webbshop representerar en fullt fungerande e-handelsplattform med alla grundläggande funktioner. Projektet demonstrerar goda kunskaper i React, tillståndshantering och responsiv webbutveckling. Plattformen är redo för vidareutveckling med fler avancerade funktioner.

Utvecklad av: Syedur Rahman
Datum: 2025/05/27
