// Library Imports
import React, { useRef, useEffect, useState } from "react";
import QrScanner from "qr-scanner";

// Relative Imports
import { Container, Value, Wrapper, Inner, Video } from "./styles";

const QrCodeScanner = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const qrScanner = new QrScanner(videoRef.current, (result) =>
      console.log(result)
    );
    qrScanner.start();
  });

  return (
    <Container>
      <Wrapper>
        <Video ref={videoRef}></Video>
      </Wrapper>
    </Container>
  );
};

export default QrCodeScanner;
