import Link from "next/link";
// import QRCodeImage from "../../components/QR/Module";
export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch Data
  const response = await fetch(`http://localhost:1337/api/find/qr/${id}`);
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

import styled from "styled-components";

const Container = styled.div`
  background-color: var(--primary-brand);
  color:#fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size:32px;
  height:100vh;
  width:100%;
`

const TextBox = styled.div`
  h3{
    text-align: center;
  }
`

const QR = ({ data }) => {
  return (
    <Container>
      <TextBox>
        <h3>{data?.label}</h3>
        <Link href={data?.url}>Click Link</Link>
      </TextBox>
    </Container>
  );
};

export default QR;
