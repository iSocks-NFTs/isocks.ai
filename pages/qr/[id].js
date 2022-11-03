import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { TailSpin } from "react-loader-spinner";
import Head from "next/head";

// import QRCodeImage from "../../components/QR/Module";
export async function getServerSideProps(context) {
  const { id } = context.query;
  // Fetch Data
  const response = await fetch(`https://api.isocks.ai/api/find/qr/${id}`);
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

import styled from "styled-components";

const Container = styled.div`
  background-color: var(--primary-brand);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  height: 100vh;
  width: 100%;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .label{
    font-weight: bolder;
    font-size:28px;
  }
  .url{
    font-size: 20px;
  }
`;

const QR = ({ data }) => {
  const router = useRouter();
  useEffect(() => {
    if(data.url){
      setTimeout(() => {
        router.push(data.url);
      }, 5000);
    }
  }, []);

  return (
    <Container>
      <Head>
        <title>iSocks QR | {data.label ? data.label : 'Invalid QR Code'}</title>
      </Head>
      <TextBox>
        <TailSpin
          height="25"
          width="25"
          color="#fff"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        <span className="label">{data?.label}</span>
        <span className="url">{data?.url}</span>
        {data.url ? <Link href={data.url ? data.url : 'isocks.ai'}>Redirecting to link shortly</Link> : "Invalid QR Code"}
      </TextBox>
    </Container>
  );
};

export default QR;
