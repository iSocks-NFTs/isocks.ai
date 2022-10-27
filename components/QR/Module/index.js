import { Image } from "../style";
import QRCode from "qrcode";
import React from "react";

const QRCodeImage = ({ id }) => {
  const [src, setSrc] = React.useState();
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
