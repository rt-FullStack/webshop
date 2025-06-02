import axios from "axios";
//populärt JavaScript-bibliotek för att göra HTTP-förfrågningar (GET, POST etc.)

const API_URL = "https://dummyjson.com/products";
//Skapar en konstant variabel API_URL som innehåller bas-URL:en till API:et returnerar dummy-data

//Funktion för att hämta alla produkter
export const fetchProducts = async () => {
  //fetchProducts() - Hämtar alla produkter
  // Asynkron funktion som hämtar data från API:et
  try {
    // Börjar ett "försöksblock" där försöker köra koden
    const response = await axios.get(API_URL);
    // Använder axios för att göra en GET-förfrågan till API_URL
    // await pausar funktionen tills och får svar från servern
    return response.data.products;
    // Returnerar bara products-arrayen från API-svaret
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
    // Returnerar en tom array om något går fel
  }
};

// Funktion för att hämta en specifik produkt baserat på dess ID
export const fetchProductById = async (id) => {
  // fetchProductById(id) - Hämtar en specifik produkt baserat på dess ID
  // Exporterar en funktion som tar ett id som parameter
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    // Gör en GET-förfrågan till en specifik produkt-URL (t.ex. "https://dummyjson.com/products/1")
    return response.data;
    // Returnerar hela svaret för den specifika produkten
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
    // Returnerar null om något går fel
  }
};
