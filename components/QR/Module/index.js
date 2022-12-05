import React, { useEffect, useRef } from "react";
import QRCodeStyling from "styled-qr-code";

const QRCodeImage = ({ id }) => {
  const [url, setUrl] = React.useState(`https://isocks.ai/qr/${id}`);
  const ref = useRef(null);

  const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    data: url,
    margin: 5,
    image:'/img/logo/isock.svg',
    qrOptions: {
      typeNumber: "0",
      mode: "Byte",
      errorCorrectionLevel: "Q",
    },
    imageOptions: {
      hideBackgroundDots: false,
      imageSize: 0.35,
      margin: 0,
    },
    dotsOptions: {
      type: "dots",
      color: "#0D0D0D",
      gradient: null,
    },
    backgroundOptions: {
      color: "#ffffff",
    },
    dotsOptionsHelper: {
      colorType: {
        single: true,
        gradient: false,
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#6a1a4c",
        color2: "#6a1a4c",
        rotation: "0",
      },
    },
    cornersSquareOptions: {
      type: "extra-rounded",
      color: "#0D0D0D",
    },
    cornersSquareOptionsHelper: {
      colorType: {
        single: true,
        gradient: false,
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#0D0D0D",
        color2: "#0D0D0D",
        rotation: "0",
      },
    },
    cornersDotOptions: {
      type: "dot",
      color: "#0D0D0D",
    },
    cornersDotOptionsHelper: {
      colorType: {
        single: true,
        gradient: false,
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#0D0D0D",
        color2: "#0D0D0D",
        rotation: "0",
      },
    },
    backgroundOptionsHelper: {
      colorType: {
        single: true,
        gradient: false,
      },
      gradient: {
        linear: true,
        radial: false,
        color1: "#ffffff",
        color2: "#ffffff",
        rotation: "0",
      },
    },
  });

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

  return (
    <>
      <div ref={ref} />
    </>
  );
};

export default QRCodeImage;
