import { useState } from "react"; // useState: Hook för att hantera komponentens lokala tillstånd
import { useNavigate } from "react-router-dom"; // useNavigate: Hook för att navigera mellan sidor i React Router
import { useCart } from "../context/CartContext"; // useCart: Hook för att komma åt kundvagnsdata från vår CartContext

//Komponentdefinition
const Product = ({ product }) => {
  // product: Objekt som innehåller produktinformation (id, title, price, thumbnail)
  const [quantity, setQuantity] = useState(1); // quantity: Lokalt tillstånd för att hantera antalet produkter som ska läggas till i kundvagnen
  const { addToCart } = useCart(); // addToCart: Funktion från CartContext för att lägga till produkter i kundvagnen
  const navigate = useNavigate(); // navigate: Funktion för att navigera till olika sidor i applikationen

  //Handlers
  const handleAddToCart = () => {
    // handleAddToCart: Funktion som anropas när användaren klickar på "Lägg till i varukorg"
    addToCart(product, quantity); // Lägger till produkten i varukorgen med valt antal
    navigate("/checkout"); // Navigerar till kassasidan efter att produkten har lagts till i kundvagnen
  };

  // Renderar produktkortet
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        onClick={() => navigate(`/product/${product.id}`)} // onClick: Navigerar till produktdetaljsidan när bilden klickas
      />
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      <div className="product-actions">
        <div className="quantity-selector">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            // "-" minskar men inte under 1
            disabled={quantity <= 1}
          >
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          {/* "+" ökar alltid med 1*/}
        </div>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Varukorg 🛒
        </button>
      </div>
    </div>
  );
};

export default Product;
