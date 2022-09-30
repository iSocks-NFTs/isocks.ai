import Head from "next/head";
import styled from "styled-components";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

const Container = styled.div`
  background-color: var(--primary-brand);
  min-width: 100%;
  max-width: 100%;
  border: 1px solid red;
`;

// function Scene(){
//     const obj = useLoader(OBJLoader,'localhost:3000/3d/sock.obj');
//     return <primitive object={obj} />
// }

const AR = () => {
  return (
    <>
      <Head>
        <title>iSocks | VR</title>
      </Head>
      <Container>
        {/* <Scene /> */}
      </Container>
    </>
  );
};

export default AR;
