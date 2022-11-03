import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image'

function ImageReader(props) {
  console.log
  const [orderText, setOrderText] = useState(null);

  const getOrders = () => {
    Tesseract.recognize(
        `${props.url}`,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        setOrderText(text);
        return
      })
  }

  return (
     <button onClick={getOrders}>Get Orders</button>
  );
}

export default ImageReader;
