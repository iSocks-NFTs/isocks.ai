import React from "react";

export const TransactionContext = React.createContext({
  userId: "",
  transactionId: "",
  storeUserID:(userId) => {},
  storeTransactionID:(transactionId) => {}
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
    }
  }, []);

  const storeUserID = (userId) =>{
    setTransactionData({...transactionData,userId});
    window.localStorage.setItem('userId',userId);
  }

  const storeTransactionID = (transactionId) =>{
    setTransactionData({...transactionData,transactionId});
    window.localStorage.setItem('transactionId',transactionId)
  }

  return (
    <TransactionContext.Provider
      value={{
        userId: transactionData.userId,
        transactionId: transactionData.transactionId,
        storeUserID,
        storeTransactionID
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;
