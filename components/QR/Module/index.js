import React from "react";
import { Image } from "../style";
import QRCode from "qrcode";

const QRCodeImage = ({ id }) => {
  const [src, setSrc] = React.useState();
  const urlData = 'https://isocksv2.netlify.app' + '/qr/' + id
  console.log(urlData);

  QRCode.toDataURL(urlData).then((data) => {
    setSrc(data);
  });

  return (
    <>
      <Image src={src} />
    </>
  );
};

export default QRCodeImage;
