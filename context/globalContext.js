import React from "react";

export const GlobalContext = React.createContext({
  modal:{
    comingSoonModal:false,
    addressVerified:false,
    subscribeForm:false,
    successModal:false,
    qrEditModal:false,
    failModal:false
  },
  setModal:() => {},
  openSettings:false,
  setOpenSettings:() => {},
});

const GlobalContextProvider = ({ children }) => {
  const [openSettings,setOpenSettings] = React.useState(false);

  const [modal,setModal] = React.useState({
    comingSoonModal:false,
    addressVerified:false,
    subscribeForm:false,
    successModal:false,
    qrEditModal:false,
    failModal:false
  })



  return (
    <GlobalContext.Provider
      value={{
        modal,
        setModal,
        openSettings,
        setOpenSettings,
        baseUrl
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
