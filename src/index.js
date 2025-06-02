import React from "react"; // Importerar React-biblioteket (nödvändigt för JSX och React-komponenter)
import ReactDOM from "react-dom/client"; // Importerar ReactDOM för att rendera React-komponenter till DOM
import "./index.scss"; // Importerar globala stilar från index.scss
import App from "./App"; // Importerar huvudkomponenten App som är applikationens startpunkt
import { CartProvider } from "./context/CartContext"; // Importerar CartProvider för att hantera kundvagnens tillstånd

const root = ReactDOM.createRoot(document.getElementById("root"));
// document.getElementById('root') : Hämtar DOM-elementet med id "root" vanligtvis i public/index.html
// ReactDOM.createRoot() : Skapar en root för att rendera React-komponenter

root.render(
  // Renderar React-appen till den skapade rooten
  <React.StrictMode>
    {/* React.StrictMode : Aktiverar strikt läge för att identifiera potentiella problem i applikationen */}
    <CartProvider>
      {/* CartProvider : Wrappas runt App-komponenten för att tillhandahålla kundvagnens kontext */}
      <App />
      {/* App-komponenten är huvudkomponenten som innehåller hela applikationen */}
    </CartProvider>
  </React.StrictMode>
);
