import React from "react";

export const GlobalContext = React.createContext({
  comingSoonModal: false,
  setComingSoonModal: () => {},
  addressVerified: false,
  setAddressVerified: () => {},
  subscribeForm:false,
  setSubscribeForm:() => {}
});

const GlobalContextProvider = ({ children }) => {
  const [comingSoonModal, setComingSoonModal] = React.useState(false);
  const [addressVerified, setAddressVerified] = React.useState(false);
  const [subscribeForm,setSubscribeForm] = React.useState(false)

  return (
    <GlobalContext.Provider
      value={{
        comingSoonModal,
        setComingSoonModal,
        addressVerified,
        setAddressVerified,
        subscribeForm,
        setSubscribeForm
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
