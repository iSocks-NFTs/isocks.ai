import { VRButton, ARButton, XR, Controllers, Hands } from "@react-three/xr";
import { Canvas } from "@react-three/fiber";
import Head from "next/head";
import styled from "styled-components";

const Container = styled.div`
  background-color: var(--primary-brand);
  min-width: 100%;
  height: 100vh;
`;

function XRSetup() {
  return (
    <>
      <VRButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
        </XR>
      </Canvas>
    </>
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
