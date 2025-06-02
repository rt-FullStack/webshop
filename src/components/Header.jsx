import { Link } from "react-router-dom"; // Link: För att navigera mellan sidor
import { useCart } from "../context/CartContext";
// useCart: Hook för att komma åt kundvagnsdata från vår CartContext

const Header = () => {
  // Header: Komponent för webbplatsens header

  //Kundvagnsdata
  const { cartItems } = useCart(); // cartItems: Hämtar kundvagnens innehåll från CartContext
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  // cartCount: Räknar totala antalet varor i kundvagnen och reduce summerar alla quantity-värden från varje produkt

  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">
          {" "}
          {/* Logo: Länk till startsidan */}
          Webshop
        </Link>
        <div className="nav-links">
          <Link to="/home">Produkter</Link> {/* Home: Länk till produktsidan */}
          <Link to="/checkout" className="cart-link">
            {/* Checkout: Länk till kassan */}
            Varukorg ({cartCount})
            {/* cartCount: Visar antalet varor i kundvagnen och Uppdateras automatiskt när varukorgen ändras (via context) */}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
