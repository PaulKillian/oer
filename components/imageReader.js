import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image';
import windyFormat from './formats.js';

function ImageReader(props) {
  const [orderText, setOrderText] = useState(null);
  const [arrayForFormatting, setarrayForFormattting] = useState([])

  const getOrders = () => {
//     Tesseract.recognize(
//         `${props.url.publicUrl}`,
//         'eng',
//         { logger: m => console.log(m) }
//       ).then(({ data: { text } }) => {
//         setOrderText(text);
//         return
//       })
    
    const { createWorker } = require('tesseract.js');

    const worker = createWorker({
      logger: m => console.log(m), // Add logger here
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
//       const { data: { text } } = await worker.recognize(`${props.url.publicUrl}`);
      const { data: { text } } = await worker.recognize(`https://pxdjpkeggdohvscyfpxw.supabase.co/storage/v1/object/public/oer-images/public/2022_10_31_12_36_17-1.jpg`);
      console.log(text);
      setOrderText(text);
      setArrayForFormatting(text);
      await worker.terminate();
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
     <div>{orderText}</div>
     <div array={arrayForFormatting}>{windyFormat}</div>
    </>
  );
}

export default ImageReader;
