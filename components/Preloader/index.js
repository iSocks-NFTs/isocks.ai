import styled from "styled-components";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
`;

const Image = styled.div`
  width: 100%;
  height: 150px;
  animation: pulse 0.8s ease-in infinite;
  z-index: 9999;

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;

export default function Preloader() {
  return (
    <Container>
      <Image src="/img/logo/logo.png" alt="iSocks Logo" />
    </Container>
  );
}
