import React from "react";

export const GlobalContext = React.createContext({
  comingSoonModal: false,
  setComingSoonModal: () => {},
  addressVerified: false,
  setAddressVerified: () => {},
  subscribeForm:false,
  setSubscribeForm:() => {},
  comingSoonVideo:true,
  setComingSoonVideo:() => {} 
});

const GlobalContextProvider = ({ children }) => {
  const [comingSoonModal, setComingSoonModal] = React.useState(false);
  const [addressVerified, setAddressVerified] = React.useState(false);
  const [subscribeForm,setSubscribeForm] = React.useState(false);
  const [comingSoonVideo,setComingSoonVideo] = React.useState(true);

  return (
    <GlobalContext.Provider
      value={{
        comingSoonModal,
        setComingSoonModal,
        addressVerified,
        setAddressVerified,
        subscribeForm,
        setSubscribeForm,
        comingSoonVideo,
        setComingSoonVideo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
