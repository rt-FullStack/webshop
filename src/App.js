import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//BrowserRouter as Router - Importerar React Routers huvudkomponent
// Routes - Komponent som omsluter(wraps) alla route-definitioner
// Route - Komponent för att definiera enskilda routes
import WelcomePage from "./pages/WelcomePage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import Header from "./components/Header";
// WelcomePage, HomePage, ProductPage, CheckoutPage - Importerar olika sidor i appen
import "./App.scss";
// App.scss - Importerar CSS-stilar för hela appen

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          {/* Header-komponenten visas överst på sidan */}
          {/* main-taggen används för att innehålla huvudinnehållet i appen */}
          <Routes>
            {/* Routes-komponenten innehåller alla definierade routes */}
            <Route path="/home" element={<HomePage />} />{" "}
            {/* "/home" → Visar HomePage */}
            <Route path="/product/:id" element={<ProductPage />} />{" "}
            {/* Visar ProductPage med produkt-ID */}
            <Route path="/checkout" element={<CheckoutPage />} />{" "}
            {/* Visar CheckoutPage */}
            <Route path="/" element={<WelcomePage />} />{" "}
            {/* Standardroute som visar WelcomePage */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
