import React from "react";

export const GlobalContext = React.createContext({
  modal:{
    comingSoonModal:false,
    addressVerified:false,
    subscribeForm:false,
    successModal:false,
    qrEditModal:true
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
    qrEditModal:true
  })

  let baseUrl = 'https://isocksnft.herokuapp.com'

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
