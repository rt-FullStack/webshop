import { useEffect, useState } from "react"; // Import React hooks för sidoeffekter och tillståndshantering
import { fetchProducts } from "../services/api"; // Importera API-funktion för att hämta produkter
import ProductList from "../components/ProductList"; // Importera komponent för att visa produktlistan

const HomePage = () => {
  // funktionskomponenten HomePage
  const [products, setProducts] = useState([]); // Använd useState för att hantera produktlistan (initialt tom)
  const [loading, setLoading] = useState(true); // Använd useState för Boolean för att visa laddningsstatus (initialt true)
  const [error, setError] = useState(null); // Använd useState för att hantera eventuella fel (initialt null)

  // Använd useEffect för att hämta produkter när komponenten monteras
  useEffect(() => {
    //useEffect körs när komponenten monteras (tomt beroendearray [])
    const loadProducts = async () => {
      // Asynkron funktion för att hämta produkter
      try {
        const data = await fetchProducts(); // Anropa API-funktionen för att hämta produkter
        setProducts(data);
      } catch (err) {
        // Hantera eventuella fel vid hämtning
        setError(err.message);
      } finally {
        setLoading(false); // Sätt loading till false när hämtningen är klar (antingen lyckad eller med fel)
      }
    };

    loadProducts(); // Anropa den asynkrona funktionen för att hämta produkter
  }, []);

  if (loading) return <div className="loading">Loading...</div>; // Visa laddningsmeddelande medan produkter hämtas
  if (error) return <div className="error">Error: {error}</div>; // Visa felmeddelande om det uppstår ett fel

  return (
    // Rendera komponenten när produkter har hämtats
    <div className="home-page">
      <h1>Produkter</h1>
      <ProductList products={products} />{" "}
      {/* Skicka produktlistan som prop till ProductList-komponenten */}
    </div>
  );
};

export default HomePage; // Exportera HomePage-komponenten för användning i andra delar av applikationen
