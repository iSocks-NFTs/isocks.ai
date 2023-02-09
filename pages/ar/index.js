import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import styled from "styled-components";
import { TailSpin } from "react-loader-spinner";

const Container = styled.div`
  background-color: var(--primary-brand);
  min-width: 100%;
  height: 100vh;
`;

function XRSetup() {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center text-white flex-col gap-5">
      <TailSpin
        height="100"
        width="100"
        color="#fff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <h4 className="sm:text-4xl text-3xl sm:text-left text-center">
        iSocks AR Currently in Closed Beta
      </h4>
    </div>
  );
}

const AR = () => {
  return (
    <>
      <Head>
        <title>iSocks | VR</title>
      </Head>
      <Container>
        <XRSetup />
      </Container>
    </>
  );
};

export default AR;
