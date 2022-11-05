import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image';
import { windyFormat } from './formats.js';
import { copy } from './copy.js'

function ImageReader(props) {
  const [orderText, setOrderText] = useState(null);

  const getOrders = () => {
    const { createWorker } = require('tesseract.js');
    const worker = createWorker({
      logger: m => console.log(m),
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(`${props.url.publicUrl}`);
      // const { data: { text } } = await worker.recognize(`https://pxdjpkeggdohvscyfpxw.supabase.co/storage/v1/object/public/oer-images/public/2022_10_31_12_36_17-1.jpg`);
      setOrderText(text);
      worker.terminate();
    })();
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
      {orderText && windyFormat(orderText)}
    </>
  );
}

export default ImageReader;
