import React from "react";

export const AuthContext = React.createContext({
  isLoggedIn:false,
  accountId:'',
  onLogin:(userId) => {},
  onLogout:() => {},
  udUsername:'',
  setUDUsername:() =>{},
  udLogOut: () =>{},
});

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false);
  const [udUsername,setUDUsername] = React.useState('');
  const [accountId,setAccountId] = React.useState('')

  React.useEffect(() =>{
    const storedUserLoggedInInformation = window.localStorage.getItem('isLoggedIn');

    if(storedUserLoggedInInformation === "1"){
      setIsLoggedIn(true);
    }

    const udDomain = window.localStorage.getItem("username");
    
    if(udDomain){
      const userDomain = JSON.parse(udDomain)
      setUDUsername(userDomain.value)
    } else {
      setUDUsername('');
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
    setAccountId(userId);
  }

  const udLogoutHandler = () =>{
    window.localStorage.removeItem('username');
  }
  
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        accountId,
        onLogout: logOutHandler,
        onLogin: logInHandler,
        udUsername,
        setUDUsername,
        udLogOut:udLogoutHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
