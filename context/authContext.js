import React from "react";

export const AuthContext = React.createContext({
  isLoggedIn:false,
  onLogin:(userId) => {},
  onLogout:() => {}
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);

  React.useEffect(() =>{
    const storedUserLoggedInInformation = window.localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformation === "1"){
      setIsLoggedIn(true);
    }
  },[])

  const logOutHandler = () =>{
    window.localStorage.removeItem('isLoggedIn');
    window.localStorage.removeItem('iSockUserID');
    setIsLoggedIn(false);
  }

  const logInHandler = (userId) =>{
    window.localStorage.setItem('isLoggedIn','1');
    setIsLoggedIn(true);
    // Store iSock User ID 
    window.localStorage.setItem('iSockUserID',userId);
  }
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logOutHandler,
        onLogin: logInHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
