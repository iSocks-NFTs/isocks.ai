import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";
import Toast from "awesome-toast-component";
import { useRouter } from "next/router";
import { endpoints } from "../utils/endpoints";
import useAuth from "../hooks/useAuth";

const currency = [
  {
    title: "USDT - Tether",
    imgURL: "/img/currency/usdt.svg",
    shortForm: "USDT",
  },
  {
    title: "US Dollar",
    imgURL: "/img/currency/dollar.svg",
    shortForm: "USD",
  },
  {
    title: "Nigerian Naira",
    imgURL: "/img/currency/naira.svg",
    shortForm: "NGN",
  },
  {
    title: "Defi Tiger",
    imgURL: "https://bscscan.com/token/images/defitiger_32.png",
    shortForm: "DTG",
  },
];

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
  currency: [],
  selectCurrency: () => {},
  processOrder: () => {},
  confirmOrder: () => {},
  selectedCurrency: {},
  checkoutPage: 0,
  nextCheckOutPage: () => {},
  previousCheckoutPage: () => {},
  selectAddressPurchase: () => {},
  calculateDiscountPrice: () => {},
  goToCreateAddressPage: () => {},
  address: {},
  storeNewAddress: () => {},
  goToAddressList: () => {},
  goToEditAddress: () => {},
  updateAddress: () => {},
  getProductQuantity: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCurrency, setCurrencySelect] = useState(currency[0]);
  const { push } = useRouter();
  const [checkoutPage, setCheckoutPage] = useState(0);
  const [address, setAddress] = useState();
  const { createNewBillingAddress } = endpoints;
  const { token, refreshData } = useAuth();

  function validateInput(form) {
    const formKeys = Object.keys(form);
    for (let i = 0; i < formKeys.length; i++) {
      if (form[formKeys[i]].length === 0) {
        new Toast("Please fill all inputs...");
        return;
      }
    }
  }

  const storeNewAddress = async (event, address) => {
    event.preventDefault();
    validateInput(address);
    new Toast("Storing New Address...");

    try {
      await axios.post(createNewBillingAddress, address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      new Toast("Successfully Added New Address");
      refreshData();
      setCheckoutPage(1);
    } catch (error) {
      console.error(error);
      new Toast("Failed to Add New Address...");
    }
  };

  const nextCheckOutPage = () => {
    setCheckoutPage(checkoutPage + 1);
  };

  const previousCheckoutPage = () => {
    setCheckoutPage(checkoutPage - 1);
  };

  const selectAddressPurchase = (address) => {
    setAddress(address);
    nextCheckOutPage();
  };

  const goToCreateAddressPage = () => {
    setCheckoutPage(3);
  };

  const goToAddressList = () => {
    setCheckoutPage(1);
  };

  const goToEditAddress = () => {
    setCheckoutPage(4);
  };

  const selectCurrency = (currency) => {
    setCurrencySelect(currency);
  };

  const updateAddress = (event, form) => {
    event.preventDefault();
    console.log(form);
  };

  const storeCart = () => {
    // Store Cart Items in Local Storage
    localStorage.setItem("isocks-cartItems", JSON.stringify(cartItems));
  };

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

    new Toast("Added to Cart...");
    storeCart();
  };

  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );

    storeCart();
  };

  const incrementQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    storeCart();
  };

  const getProductQuantity = (productId) => {
    const product = cartItems.find((product) => product.id === productId);
    return product ? product.quantity : 0;
  };

  const decrementQuantity = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    storeCart();
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);

    return totalPrice;
  };

  const calculateDiscountPrice = (price) => {
    if (selectedCurrency.title === "Defi Tiger") {
      let amountToDeduct = 0.3 * price;
      let discountPrice = price - amountToDeduct;
      return discountPrice;
    }

    return price.toFixed(2);
  };

  const calculateTotalQuantity = () => {
    const totalQuantity = cartItems.reduce((accumulator, product) => {
      return accumulator + product.quantity;
    }, 0);

    return totalQuantity;
  };

  const processOrder = async () => {
    if (cartItems.length === 0) {
      new Toast("Cart is Empty...");
      return;
    }

    if (
      selectedCurrency.title === "Nigerian Naira" ||
      selectedCurrency.title === "US Dollar"
    ) {
      new Toast("Payment using this currency isn't available yet...");
      return;
    }
    nextCheckOutPage();
  };

  const confirmOrder = async () => {
    new Toast("Processing Order...");
    const { createOrder } = endpoints;
    const totalPrice = calculateDiscountPrice(calculateTotalPrice());
    try {
      const response = await axios.post(
        createOrder,
        {
          products: cartItems,
          paymentMethod: selectedCurrency.title,
          billingInfo: address,
          totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        push(`/store/product/payment/${response.data.id}`);
      }
    } catch (error) {
      console.error(error);
      if (error && !error.response) {
        new Toast("Server Error... Processing Order Failed...");
      }

      if (error && error.response) {
        const { status } = error.response;

        if (status === 500) {
          new Toast("Server Error... Processing Order Failed...");
        }

        if (status === 404) {
          new Toast("Product Stock System Error... Please Try Again Later...");
        }
      }
    }
  };

  const checkOut = () => {
    if (cartItems.length === 0) {
      new Toast("Cart is empty");
      return;
    }

    // Store Cart Items in Local Storage
    localStorage.setItem("isocks-cartItems", JSON.stringify(cartItems));

    // Redirect to Check Out Page
    push("/store/product/cart");
  };

  const emptyCart = () => {
    // Empty Cart Items in Local Storage
    localStorage.removeItem("isocks-cartItems");

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
        currency,
        selectedCurrency,
        selectCurrency,
        processOrder,
        confirmOrder,
        checkoutPage,
        nextCheckOutPage,
        previousCheckoutPage,
        selectAddressPurchase,
        calculateDiscountPrice,
        address,
        goToCreateAddressPage,
        storeNewAddress,
        goToAddressList,
        goToEditAddress,
        updateAddress,
        getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
