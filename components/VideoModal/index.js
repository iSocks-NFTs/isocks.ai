import React, { useContext,useRef,useEffect } from "react";
import { GlobalContext } from "../../context/globalContext";
import { BackGround, ModalContainer, ComingSoonVideo, Source } from "./style";
import { motion } from "framer-motion";

const VideoModal = () => {
  const { comingSoonVideo, setComingSoonVideo } = useContext(GlobalContext);
  const videoPlayer = useRef();

  useEffect(() =>{
    videoPlayer.current.play();
  },[])

  return (
    <BackGround
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setComingSoonVideo(!comingSoonVideo)}
    >
      <ModalContainer
        as={motion.div}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ComingSoonVideo ref={videoPlayer} controls autoPlay={true} loop muted>
          <Source src="/video/isocks_mb.m4v" />
        </ComingSoonVideo>
      </ModalContainer>
    </BackGround>
  );
};

export default VideoModal;
