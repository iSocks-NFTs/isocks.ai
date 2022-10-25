import React from "react";

export const TransactionContext = React.createContext({
  userId: "",
  transactionId: "",
  otp:"",
  setTransactionData: () => {},
});

const TransactionContextProvider = ({ children }) => {
  const [transactionData, setTransactionData] = React.useState({
    userId: "",
    transactionId: "",
    otp:''
  });

  React.useEffect(() => {
    const storedTransactionInformation =
      window.localStorage.getItem("transactionData");
    if (!storedTransactionInformation) {
        setTransactionData({...transactionData,userId:'',
        transactionId:'',
        otp:''
    })
    }
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        userId: transactionData.userId,
        transactionId: transactionData.transactionId,
        otp:transactionData.otp,
        setTransactionData,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionContextProvider;