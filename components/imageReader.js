import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image'

function ImageReader(props) {
  const [orderText, setOrderText] = useState(null);

  const getOrders = () => {
    Tesseract.recognize(
        `${props.url.publicUrl}`,
        'eng',
        { logger: m => console.log(m) }
      ).then(({ data: { text } }) => {
        setOrderText(text);
        return
      })
  }

  return (
    <>
    {props.file
      ? <button 
          type="button" 
          class="btn btn-success"
          onClick={getOrders}
          >Get Orders
        </button>
      : <button 
          type="button" 
          className="btn btn-dark">Get Orders
        </button>
    }
     <div>{orderText}</div>
    </>
  );
}

export default ImageReader;
