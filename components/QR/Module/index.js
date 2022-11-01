import React from "react";
import { Image } from "../style";
import QRCode from "qrcode";

const QRCodeImage = ({ id }) => {
  const [src, setSrc] = React.useState();

  QRCode.toDataURL(`http://localhost:3000/qr/${id}`).then((data) => {
    setSrc(data);
  });

  return (
    <>
      <Image src={src} />
    </>
  );
};

export default QRCodeImage;
