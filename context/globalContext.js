import React from 'react';

export const GlobalContext = React.createContext({
    comingSoonModal:false,
    setComingSoonModal:() => {}
})

const GlobalContextProvider = ({children}) =>{
    const [comingSoonModal,setComingSoonModal] = React.useState(false);

    return(
        <GlobalContext.Provider 
            value={{comingSoonModal,setComingSoonModal}}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;