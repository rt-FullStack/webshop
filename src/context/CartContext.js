import { createContext, useContext, useState } from "react";
//createContext: Skapar ett nytt React Context-objekt
//useContext: Hook för att använda värdet från ett Context-objekt
//useState: Hook för att hantera state i en komponent

const CartContext = createContext();
//Skapar ett nytt Context-objekt för kundvagnen och det är tillgängligt för alla komponenter som är inneslutna i CartProvider.

export const CartProvider = ({ children }) => {
  //CartProvider: Komponent som tillhandahåller kundvagnens kontext till dess barn komponenter
  const [cartItems, setCartItems] = useState([]);
  //Skapar en state-variabel cartItems som innehåller alla produkter i kundvagnen, Initialt är det en tom array
  //setCartItems är en funktion som uppdaterar värdet av cartItems

  //Funktion för att lägga till en produkt i kundvagnen
  const addToCart = (product, quantity = 1) => {
    //Om ingen kvantitet anges, sätts den till 1
    setCartItems((prevItems) => {
      //prevItems är den tidigare listan av produkter i kundvagnen
      const existingItem = prevItems.find((item) => item.id === product.id);
      //Kontrollerar om produkten redan finns i kundvagnen

      if (existingItem) {
        //Om produkten redan finns, uppdatera dess kvantitet
        return prevItems.map((item) =>
          item.id === product.id
            ? //Om produktens id matchar, uppdatera kvantiteten
              { ...item, quantity: item.quantity + quantity }
            : //Annars behåll den oförändrad
              item
        );
      }

      return [...prevItems, { ...product, quantity }];
      //Om produkten inte finns i kundvagnen, lägg till den med angiven kvantitet
    });
  };

  //funktionen tar bort en produkt från kundvagnen baserat på dess id
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  //Funktionen uppdaterar kvantiteten för en produkt i kundvagnen
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  //Funktionen tömmer kundvagnen genom att sätta cartItems till en tom array
  const clearCart = () => {
    setCartItems([]);
  };

  //Beräknar den totala kostnaden för alla produkter i kundvagnen
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
