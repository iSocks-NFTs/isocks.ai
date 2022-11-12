import React from "react";

export const TransactionContext = React.createContext({
  userId: "",
  transactionId: "",
  storeData: (userId, transactionId) => {},
});

const TransactionContextProvider = ({ children }) => {
  const [transactionData, setTransactionData] = React.useState({
    userId: "",
    transactionId: "",
  });

  React.useEffect(() => {
    const storedTransactionInformation =
      window.localStorage.getItem("transactionData");
    if (!storedTransactionInformation) {
      setTransactionData({
        ...transactionData,
        userId: "",
        transactionId: "",
      });
    } else {
      const userId = window.localStorage.getItem("userId");
      const transactionId = window.localStorage.getItem("transactionId");
      setTransactionData({
        ...transactionData,
        userId,
        transactionId,
      });
    }
  }, []);

  const storeData = (userId, transactionId) => {
    setTransactionData({ ...transactionData, userId });
    setTransactionData({ ...transactionData, transactionId });
    window.localStorage.setItem("userId", userId);
    window.localStorage.setItem("transactionId", transactionId);
  };

  return (
    <TransactionContext.Provider
      value={{
        userId: transactionData.userId,
        transactionId: transactionData.transactionId,
        storeData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
