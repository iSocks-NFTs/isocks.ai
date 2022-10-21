import React from "react";
import {
  Container,
  Brand,
  UserBox,
  UserSettings,
  WelcomeMessage,
} from "./style";
import { HiUserCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../../Form";
import { GlobalContext } from "../../../context/globalContext";
import { AuthContext } from "../../../context/authContext";
import Router from "next/router";
import useEndSession from "../../../hooks/useEndSession";
import useCheckSession from "../../../hooks/useCheckSession";

const Navbar = () => {
  const { openSettings, setOpenSettings } = React.useContext(GlobalContext);
  const { setAuthStatus, authUser, setAuthUser } =
    React.useContext(AuthContext);
  const [adminData, setAdminData] = React.useState({
    emailAddress: "",
  });

  function logOut() {
    setAuthStatus(false);
    setAuthUser("");
    const {userRecord} = useEndSession();
    Router.push("/dashboard/auth");
  }

  React.useEffect(() => {
    const { emailAddress } = useCheckSession();
    if(emailAddress){
      setAdminData({...adminData,emailAddress:emailAddress});
    }
  }, []);

  return (
    <Container>
      <Brand src="/img/logo/logo.png" alt="logo" />
      <UserBox>
        <HiUserCircle onClick={() => setOpenSettings(!openSettings)} size={35} />
        <AnimatePresence
          initial={false}
          node="wait"
          onExitComplete={() => null}
        >
          {openSettings && (
            <UserSettings
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <WelcomeMessage>Hey Admin</WelcomeMessage>
              <span>{adminData.emailAddress ? adminData.emailAddress : ""}</span>
              <Button width="180px" onClick={() => logOut()}>
                Log Out
              </Button>
            </UserSettings>
          )}
        </AnimatePresence>
      </UserBox>
    </Container>
  );
};

export default Navbar;
