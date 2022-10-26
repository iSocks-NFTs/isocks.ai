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
import axios from "axios";

export async function getServerSideProps(context) {
  return {
    props: {data}, // will be passed to the page component as props
  }
}

const Navbar = () => {
  const { openSettings, setOpenSettings } = React.useContext(GlobalContext);
  const { onLogout } =
    React.useContext(AuthContext);
  const [adminData, setAdminData] = React.useState({
    emailAddress: "",
  });

  function logOut() {
    onLogout();
    Router.push("/dashboard/auth");
  }

  React.useEffect(() =>{
    const userId = window.localStorage.getItem('iSockUserID');
      axios.get(`http://localhost:1337/api/find/user/${userId}`)
      .then((res) => {
        if(res){
          setAdminData({...adminData,emailAddress:res.data.emailAddress});
        }
      }).catch((err) => console.log(err))
  },[adminData])

  return (
    <Container>
      <Brand src="/img/logo/logo.png" alt="logo" />
      <UserBox>
        <HiUserCircle
          onClick={() => setOpenSettings(!openSettings)}
          size={35}
        />
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
              <span>
                {adminData.emailAddress ? adminData.emailAddress : ""}
              </span>
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
