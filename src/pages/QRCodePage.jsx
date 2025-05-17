import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import './QRCodePage.css';

const QRCodePage = () => {
  const url = ' http://192.168.43.234:3000/';

  return (
    <div className="qr-container">
      <h1>Code QR pour mobile</h1>
      <QRCodeCanvas
        value={url}
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={true}
      />
      <p>Scannez ce code avec votre appareil mobile pour accéder à l'application.</p>
    </div>
  );
};

export default QRCodePage;
