# ‘webshop' React App #

# Beskrivning 

Detta är en fullstack-inspirerad e-handelsapplikation byggd med React, som simulerar en verklig webshop. Applikationen är responsiv, har en användarvänlig design och innehåller alla grundläggande funktioner som förväntas av en modern e-handelsplattform: 

- Välkomstsida - med mjuka animationer för en trevlig användarupplevelse. 
- Produktkatalog - som hämtar data från ett externt API (DummyJSON). 
- Produktdetaljer - med bilder, beskrivningar och prisinformation. 
- Kundvagn - där användare kan lägga till, ändra antal och ta bort produkter. 
- Kassasystem - med formulär för kunduppgifter och orderbekräftelse. 
- Responsiv design - som fungerar på både mobil och desktop. 

# Installation & Start 
Krav: Node.js (v16+) och npm  

# Steg-för-steg ()
- git clone webshop 
- cd webshop 
- npm install
  
# Teknologier & Bibliotek 

- Frontend 
React (Hooks: useState, useEffect, useContext, useParams, useNavigate) 
React Router v6 (för routing/navigering) 
Axios (för API-anrop) 
Framer Motion (för animationer) 
React Icons (för sociala medier-ikoner)

- Styling 
SCSS (modulär styling, variabler, nesting) 
Flexbox & CSS Grid (för layout) 
Media Queries (för responsivitet)

- Tillståndshantering 
Context API (för global tillgång till kundvagnen) 
API 
DummyJSON (https://dummyjson.com/products) – Ger realistisk produktdata. 

# Komponentstruktur (Detaljerad) 

- Huvudkomponenter 

App.js: Rotkomponent som hanterar routing. 
index.js: Appens startpunkt, omsluter allt med CartProvider. 

- Sidor (/pages) 

WelcomePage.jsx: Förstasidan med animationer och länk till shoppen. 
HomePage.jsx: Visar alla produkter (ProductList). 
ProductPage.jsx: Visar detaljer för en enskild produkt. 
CheckoutPage.jsx: Kassasida med formulär och orderbekräftelse. 

# Komponenter (/components) 

Header.jsx: Navigeringsmeny med varukorgsräknare. 
Footer.jsx: Kontaktinfo & sociala medier-länkar. 
Product.jsx: Enskilt produktkort (används i ProductList). 
ProductList.jsx: Grid-layout för produkter. 
Cart.jsx: Visar produkter i varukorgen. 
CartItem.jsx: Enskild produkt i varukorgen (med +/- knappar). 
Checkout.jsx: Sammanfattning av beställning. 

# Context (/context) 

CartContext.js: Hanterar kundvagnens tillstånd (cartItems, addToCart, removeFromCart, updateQuantity, clearCart, totalPrice). 

# API (/services) 

api.js: Axios-funktioner för fetchProducts() och fetchProductById(id). 

# Styling (/styles) 

App.scss: Globala stilar (header, produkter, kundvagn). 
Footer.scss: Anpassad styling för sidfot. 
WelcomePage.scss: Animationer & layout för välkomstsidan. 

# Starta utvecklingsservern: 
npm start 
Appen öppnas automatiskt på http://localhost:3000. 

# Funktioner (Djupdykning) 

A. Kundvagn (CartContext) 

addToCart(product, quantity) – Lägger till en produkt (eller ökar antal om den redan finns). 
removeFromCart(productId) – Tar bort en produkt helt. 
updateQuantity(productId, newQuantity) – Ändrar antal (tar bort om quantity ≤ 0). 
clearCart() – Tömmer hela varukorgen. 
totalPrice – Beräknar totalsumman automatiskt. 

B. Sidor & Routing 
/: WelcomePage => Animerad landningssida. 
/home: HomePage => Produktlista (ProductList). 
/product/:id: ProductPage => Produktdetaljer + "Lägg till i varukorg". 
/checkout: CheckoutPage => Formulär + orderbekräftelse. 

C. Responsiv Design 
Mobilvänlig (anpassad med @media-queries). 
Flexbox/Grid för anpassningsbara layouter. 
Optimerad för touch (stora knappar, enkel navigering). 


# Utvecklare & Licens 
Skapad av: Syedur Rahman 
Kurs: React.js på Företagsuniversitetet 
Licens: Öppen för utbildningssyfte 

 
