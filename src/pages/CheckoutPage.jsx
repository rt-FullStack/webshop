import { useState } from "react"; // useState: React Hook för tillståndshantering
import { useCart } from "../context/CartContext"; // useCart: Hook för att komma åt kundvagnsfunktionalitet
import Checkout from "../components/Checkout"; // Checkout: Komponent för att visa varukorgsinnehåll och hantera beställningar

const CheckoutPage = () => {
  // CheckoutPage: Huvudkomponenten för kassan
  const { cartItems, totalPrice, clearCart } = useCart(); //useCart(): Hook för att hämta kundvagnsdata och funktioner från CartContext
  const [customerInfo, setCustomerInfo] = useState({
    // useState: Hook för att hantera kundinformation
    name: "", // Kundens namn
    email: "", // Kundens e-post
    address: "", // Kundens adress
  });
  const [orderPlaced, setOrderPlaced] = useState(false); // useState: Hook för att spåra om beställningen har lagts (orderPlaced: Boolean för beställningsstatus)

  //Formulärhantering
  const handleInputChange = (e) => {
    // handleInputChange: Funktion för att hantera ändringar i formulärfälten
    const { name, value } = e.target; // Destrukturera namn och värde från händelseobjektet
    setCustomerInfo((prev) => ({ ...prev, [name]: value })); // Uppdatera kundinformation med det nya värdet
  };

  //Beställningshantering
  const handleSubmit = (e) => {
    // handleSubmit: Funktion för att hantera formulärinlämning
    e.preventDefault(); // Förhindra standardbeteendet för formuläret
    console.log("Beställt:", { customerInfo, cartItems }); // Logga kundinformation och varukorgsinnehåll till konsolen
    setOrderPlaced(true); // Uppdatera orderPlaced till true för att indikera att beställningen har lagts
    clearCart(); // Rensa kundvagnen efter beställning
  };

  // Orderbekräftelse
  if (orderPlaced) {
    // Om beställningen har lagts, visa bekräftelsemeddelande
    return (
      <div className="order-confirmation">
        <h2>Tack för beställning!</h2>
        <p>Beställning har genomförts.</p>
        <p>Har skickat en bekräftelse till {customerInfo.email}.</p>
      </div>
    );
  }

  //Huvudrendering (utcheckning)
  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="cart-section">
          <h2>Din varukorg</h2>
          <Checkout />
          <div className="cart-total">
            <h3>Summa att betala: ${totalPrice.toFixed(2)}</h3>{" "}
            {/* Visa totalbeloppet */}
          </div>
        </div>
        <div className="customer-info">
          <h2>Kundinformation</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Namn:</label>
              <input
                type="text"
                name="name"
                value={customerInfo.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>E-mejl:</label>
              <input
                type="email"
                name="email"
                value={customerInfo.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Adress:</label>
              <textarea
                name="address"
                value={customerInfo.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="submit"
              className="place-order-btn"
              disabled={cartItems.length === 0}
            >
              Skicka beställning
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
