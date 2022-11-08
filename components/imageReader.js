import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image';
import { windyFormat } from './formats.js';
import { copy } from './copy.js'

function ImageReader(props) {
  const [orderText, setOrderText] = useState('');
  const [displayText, setDisplayText] = useState([]);
  const [images, setImages] = useState(props.url);
  
  const getOrders = () => {
    let urls = props.url;

    urls.map(async (url) => {
      const { createWorker } = require('tesseract.js');
      const worker = createWorker({
        logger: m => console.log(m),
      });
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
      const { data: { text } } = await worker.recognize(`${url}`);

      setDisplayText([...displayText, text]);
      worker.terminate();

     if (images.length === 0) {
          setImages(null);
        } else if (urls) {
          setImages(() =>
            [...urls.shift()]
          );
           document.getElementById('orders').click();
        }
    })
  }

  return (
    <>
      {props.file
        ? <button 
            id='orders'
            type="button" 
            class="btn btn-success"
            onClick={getOrders}
            setSpinner
            >Get Orders
          </button>
        : <button class="btn btn-primary" type="button" disabled>
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Loading...
          </button>
      }
      {displayText && windyFormat(displayText)}
    </>
  );
}

export default ImageReader;
