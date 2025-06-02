import { useCart } from "../context/CartContext"; // useCart: Hook för att komma åt kundvagnsdata från vår CartContext
import CartItem from "./CartItem"; // CartItem: Komponent som visar en enskild produkt i varukorgen

const Checkout = () => {
  // Checkout: Komponent för att visa kundvagnens innehåll och totalpris
  const { cartItems, totalPrice } = useCart();
  // cartItems: Hämtar kundvagnens innehåll från CartContext

  return (
    <div className="checkout">
      {/* checkout: Komponent för att visa kundvagnens innehåll och totalpris */}
      <h2>Beställning sammanfattning</h2>
      {cartItems.length === 0 ? (
        // Om varukorgen är tom, visa ett meddelande
        <p>Varukorgen är tom</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              // Iterera över varje produkt i kundvagnen och rendera CartItem-komponenten
              <CartItem key={item.id} item={item} />
              // key: Unikt ID för Reacts virtuella DOM (krävs för listor) och item: Skickar hela produktobjektet som prop
            ))}
          </div>
          <div className="order-total">
            {/* order-total: Visar totalpriset för alla produkter i kundvagnen */}
            <h3>Total: ${totalPrice.toFixed(2)}</h3>
            {/* totalPrice: Visar det totala priset för alla produkter i kundvagnen */}
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
