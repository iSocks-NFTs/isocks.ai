import { useState, useEffect, createContext, useContext } from "react";
import Toast from "awesome-toast-component";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  incrementQuantity: () => {},
  decrementQuantity: () => {},
  calculateTotalPrice: () => {},
  checkOut: () => {},
  emptyCart: () => {},
  calculateTotalQuantity: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Check if there are items in localStorage
    const cartItems = localStorage.getItem("isocks-cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product already exists in the cart, check if available quantity allows for incrementing the quantity
      if (existingItem.quantity < product.quantityAvailable) {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        new Toast("Cannot add more than available quantity");
      }
    } else {
      // If it's a new product, check if available quantity is greater than 0
      if (product.quantityAvailable > 0) {
        setCartItems((prevCartItems) => [
          ...prevCartItems,
          { ...product, quantity: 1 },
        ]);
      } else {
        new Toast("Product is out of stock");
      }
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.productPrice * item.quantity;
    });

    return totalPrice;
  };

  const calculateTotalQuantity = () => {
    const totalQuantity = cartItems.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return totalQuantity;
  };

  const checkOut = () => {
    if (cartItems.length === 0) {
      new Toast("Cart is empty");
      return;
    }

    // Store Cart Items in Local Storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Redirect to Check Out Page
    push("/store/product/checkout");
  };

  const emptyCart = () => {
    // Empty Cart Items in Local Storage
    localStorage.removeItem("cartItems");

    // Empty Cart Items in State
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotalPrice,
        checkOut,
        emptyCart,
        calculateTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
