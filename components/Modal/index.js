import React, { useContext } from "react";
import { GlobalContext } from "../../context/globalContext";
import { BackGround,ISockLogo,ModalContainer } from "./Modalstyle";

const Modal = () =>{
    const {comingSoonModal,setComingSoonModal} = useContext(GlobalContext);
    return(
        <BackGround onClick={() => setComingSoonModal(!comingSoonModal)}>
            <ModalContainer>
                <ISockLogo src="/img/logo/logo.png" alt="iSock Logo" />
                Coming Soon!
            </ModalContainer>
        </BackGround>
    )
}

export default Modal;