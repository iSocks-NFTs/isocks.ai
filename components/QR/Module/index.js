import React from "react";
import { Image } from "../style";
import QRCode from "qrcode";
import { GlobalContext } from "../../../context/globalContext";

const QRCodeImage = ({ id }) => {
  const [src, setSrc] = React.useState();
  const { baseUrl } = React.useContext(GlobalContext);
  const urlData = 'https://isocksv2.netlify.app' + '/qr/' + id
  console.log(urlData);

  QRCode.toDataURL(id).then((data) => {
    setSrc(data);
  });

  return (
    <>
      <Image src={src} />
    </>
  );
};

export default QRCodeImage;
