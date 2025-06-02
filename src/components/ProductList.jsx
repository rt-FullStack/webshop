import Product from "./Product"; // Importerar Product-komponenten som används för att rendera varje produkt i listan

const ProductList = ({ products }) => {
  //Funktionskomponent som tar emot en products prop och products förväntas vara en array med produktobjekt

  //Rendering
  return (
    <div className="product-list">
      {products.map((product) => (
        // products.map: Itererar över varje produkt i products-arrayen och skapar en Product-komponent för varje produkt
        <Product key={product.id} product={product} />
        //key: Unikt ID för Reacts virtuella DOM (krävs för listor) och product: Skickar hela produktobjektet som prop
        //product.id används som unik identifierare
      ))}
    </div>
  );
};

export default ProductList;
