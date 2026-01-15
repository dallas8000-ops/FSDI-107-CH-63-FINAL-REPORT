import { useState } from 'react';
import GlobalContext from "./globalContext";

function GlobalProvider(props) {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({ name: "Barney" });

  // Function to add a product to the cart
  const addProductToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to clear the cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to remove a product from the cart
  const removeProductFromCart = (productId) => {
    console.log("Removing ", productId);
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <GlobalContext.Provider value={{
      cart: cart,
      user: user,
      addProductToCart: addProductToCart,
      clearCart: clearCart,
      removeProductFromCart: removeProductFromCart
    }}>
      {props.children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;