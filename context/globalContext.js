import React from "react";

export const GlobalContext = React.createContext({
  modal:{
    comingSoonModal:false,
    addressVerified:false,
    subscribeForm:false,
    successModal:false,
    qrEditModal:false
  },
  setModal:() => {},
  openSettings:false,
  setOpenSettings:() => {},
  baseUrl:''
});

const GlobalContextProvider = ({ children }) => {
  const [openSettings,setOpenSettings] = React.useState(false);

  const [modal,setModal] = React.useState({
    comingSoonModal:false,
    addressVerified:false,
    subscribeForm:false,
    successModal:false,
    qrEditModal:false
  })

  let baseUrl = 'http://localhost:1337'

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
