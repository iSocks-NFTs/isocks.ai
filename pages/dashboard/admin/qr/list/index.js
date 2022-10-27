import QRCodeImage from "../../../../../components/QR/Module";

export async function getServerSideProps() {
  // Fetch Data
  const response = await fetch("https://isocksnft.herokuapp.com/api/find/qr");
  const data = await response.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}

const QRList = ({ data }) => {
  return (
    <>
      {data.map((qr, index) => {
        return (
          <div key={index}>
            <QRCodeImage id={qr.id} />
            <div>{qr.label}</div>
          </div>
        );
      })}
    </>
  );
};

export default QRList;
