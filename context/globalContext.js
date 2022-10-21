import React from "react";

export const GlobalContext = React.createContext({
  comingSoonModal: false,
  setComingSoonModal: () => {},
  addressVerified: false,
  setAddressVerified: () => {},
  subscribeForm:false,
  setSubscribeForm:() => {},
  successModal:false,
  setSuccessModal:() => {},
  openSettings:false,
  setOpenSettings:() => {}
});

const GlobalContextProvider = ({ children }) => {
  const [comingSoonModal, setComingSoonModal] = React.useState(false);
  const [addressVerified, setAddressVerified] = React.useState(false);
  const [subscribeForm,setSubscribeForm] = React.useState(false);
  const [successModal,setSuccessModal] = React.useState(false);
  const [openSettings,setOpenSettings] = React.useState(false);

  return (
    <GlobalContext.Provider
      value={{
        comingSoonModal,
        setComingSoonModal,
        addressVerified,
        setAddressVerified,
        subscribeForm,
        setSubscribeForm,
        successModal,
        setSuccessModal,
        openSettings,
        setOpenSettings
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
