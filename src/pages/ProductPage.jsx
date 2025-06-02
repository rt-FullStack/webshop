import { useEffect, useState } from "react"; // React hooks
import { useParams } from "react-router-dom"; // För att läsa URL-parametrar
import { fetchProductById } from "../services/api"; // API-funktion för att hämta produktdata
import { useCart } from "../context/CartContext"; // Hook för att komma åt kundvagnsfunktionalitet

const ProductPage = () => {
  // ProductPage: Komponent för att visa en enskild produkt
  const { id } = useParams(); //id: Hämtas från URL:en
  const [product, setProduct] = useState(null); // product: Produktdata som hämtas från API:et
  const [loading, setLoading] = useState(true); // oading/error: Hanterar laddning och fel
  const [error, setError] = useState(null); // error: Felmeddelande vid problem med API-anropet
  const [quantity, setQuantity] = useState(1); // quantity: Antal produkter som ska läggas till i kundvagnen
  const { addToCart } = useCart(); // addToCart: Funktion för att lägga till produkter i kundvagnen

  //Datahämtning
  useEffect(() => {
    // useEffect: Hook som körs när komponenten mountas eller id ändras
    const loadProduct = async () => {
      // loadProduct: Asynkron funktion för att hämta produktdata
      try {
        // try/catch: För att hantera eventuella fel vid API-anropet
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  //Visar laddning, fel eller "inte hittad" vid behov
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return <div className="not-found">Product not found</div>;

  return (
    // Huvudrendering
    <div className="product-page">
      {" "}
      {/* ProductPage: Renderar produktdetaljer */}
      <div className="product-images">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product-details">
        {" "}
        {/* product-details: Renderar produktinformation */}
        <h1>{product.title}</h1>
        <p className="price">${product.price}</p>
        <p className="description">{product.description}</p>
        <div className="quantity-selector">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))} // Minskar kvantitet
            disabled={quantity <= 1}
          ></button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity((q) => q + 1)}>+</button>{" "}
          {/* Ökar kvantitet */}
        </div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          {" "}
          {/* Lägg till i kundvagn */}
          Lägg till i varukorg 🛒
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
