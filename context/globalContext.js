import React from "react";

export const GlobalContext = React.createContext({
  modal:{},
  setModal:() => {},
  openSettings:false,
  setOpenSettings:() => {},
  baseUrl:''
});

const GlobalContextProvider = ({ children }) => {
  const [openSettings,setOpenSettings] = React.useState(false);

  const [modal,setModal] = React.useState({
    comingSoonModal:true,
    addressVerified:false,
    subscribeForm:false,
    successModal:false,
    qrEditModal:false
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
