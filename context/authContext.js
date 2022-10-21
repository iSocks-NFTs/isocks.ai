import React from "react";

export const AuthContext = React.createContext({
  authStatus: false,
  setAuthStatus: () => {},
  authUser: "",
  setAuthUser:() => {}
});

const AuthContextProvider = ({ children }) => {
  const [authStatus, setAuthStatus] = React.useState(false);
  const [authUser, setAuthUser] = React.useState("");
  return (
    <AuthContext.Provider
      value={{
        authStatus,
        setAuthStatus,
        authUser,
        setAuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
