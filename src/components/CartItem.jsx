import { useCart } from "../context/CartContext"; // Använder useCart hook för att komma åt kundvagnsfunktioner

const CartItem = ({ item }) => {
  // CartItem-komponent som representerar en enskild produkt i kundvagnen
  const { removeFromCart, updateQuantity } = useCart();
  // removeFromCart: Funktion för att ta bort en produkt från kundvagnen

  return (
    // Renderar en enskild produkt i kundvagnen
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} />
      {/* Visar produktens bild */}

      <div className="item-details">
        {/* Produktdetaljer */}

        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        {/* Visar produktens titel och pris */}
        <div className="quantity-controls">
          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
            {/* Uppdaterar produktens kvantitet */}+
          </button>
        </div>
        <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
          {/* Tar bort produkten från kundvagnen */}
          Ta bort
        </button>
      </div>
    </div>
  );
};

export default CartItem;
