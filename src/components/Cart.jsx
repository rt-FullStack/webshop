import { useCart } from "../context/CartContext"; // useCart: Hook för att komma åt kundvagnsdata från vår CartContext
import CartItem from "./CartItem"; // CartItem: Komponent som visar en enskild produkt i varukorgen

const Cart = () => {
  // Cart: Komponent för att visa kundvagnens innehåll
  const { cartItems } = useCart();
  // cartItems: Hämtar kundvagnens innehåll från CartContext

  if (cartItems.length === 0) {
    // Om varukorgen är tom, visa ett meddelande
    return <div className="empty-cart">Varukorg är tom</div>;
  }
  // Om varukorgen inte är tom, rendera innehållet
  return (
    <div className="cart">
      {cartItems.map((item) => (
        // Skapar en CartItem för varje produkt i varukorgen
        <CartItem key={item.id} item={item} />
        // Använder item.id som unik nyckel och Skickar hela produktobjektet som prop
      ))}
    </div>
  );
};

export default Cart;
// Cart-komponenten används för att visa alla produkter i kundvagnen
