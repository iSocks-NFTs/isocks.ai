import Link from "next/link";
// import QRCodeImage from "../../components/QR/Module";
export async function getServerSideProps({ context }) {
  const { id } = context.query;
  // Fetch Data
  const response = await fetch(`https://isocksnft.herokuapp.com/api/find/qr/${id}`);
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const QR = ({ data }) => {
  return (
    <>
      <div>QR Code Link</div>
      <Link href={data?.url}>{data?.label}</Link>
    </>
  );
};

export default QR;
