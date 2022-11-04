import React, { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import Image from 'next/image';
import windyFormat from './formats.js';
import { copy } from './copy.js'
import styles from "../styles/Home.module.css";

function ImageReader(props) {
  const [orderText, setOrderText] = useState(null);
  const [arrayForFormatting, setArrayForFormatting] = useState(null)

  const getOrders = () => {
    const { createWorker } = require('tesseract.js');

    const worker = createWorker({
      logger: m => console.log(m),
    });

    (async () => {
      await worker.load();
      await worker.loadLanguage('eng');
      await worker.initialize('eng');
//       const { data: { text } } = await worker.recognize(`${props.url.publicUrl}`);
      const { data: { text } } = await worker.recognize(`https://pxdjpkeggdohvscyfpxw.supabase.co/storage/v1/object/public/oer-images/public/2022_10_31_12_36_17-1.jpg`);
      setOrderText(text);
      worker.terminate();
      
//       let values = text.substring(text.indexOf("PO:"));
//       const po = values.substring(0, values.indexOf('Buyer:'));
//       values = text.substring(text.indexOf("Buyer:"));
//       const buyer = values.substring(0, values.indexOf('SKU:'));
//       const skuRemove = values.split("SKU:").pop();
//       const sku = skuRemove.substring(0, skuRemove.indexOf('Part Cost:'));
//       values = text.substring(text.indexOf("SKU:"));
//       values = text.substring(text.indexOf("Part Cost:"));
//       const partCost = values.substring(0, values.indexOf('http'));
      
      let values = text.substring(text.indexOf("PO:"));
      const po = values.substring(0, values.indexOf('Buyer:'));
      
      values = text.substring(text.indexOf("Buyer:"));
      const buyer = values.substring(0, values.indexOf('SKU:'));
      let splitBuyer = [buyer];
      splitBuyer = splitBuyer.split(' ');
      console.log(splitBuyer)
      
      values = text.substring(text.indexOf("SKU:"));
      const sku = values.substring(0, values.indexOf('Part Cost:'));
      
      
      values = text.substring(text.indexOf("Part Cost:"));
      const partCost = values.substring(0, values.indexOf('http'));

      setArrayForFormatting({po, buyer, sku, partCost});
    })();
  }

  // useEffect(() => {
  //   if(arrayForFormatting) {
  //     var values = arrayForFormatting.replace(/\s/g, '');
  //     values = values.substring(values.indexOf("PO:") + 1);
  //     setArrayForFormatting(values);
  //   }}, [])

  console.log(arrayForFormatting)

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
     {/* <div>{orderText}</div> */}
     {/* <windyFormat array={arrayForFormatting}></windyFormat> */}
     {arrayForFormatting &&
      <>
        <div id='po' className={styles.pointer}
          onClick={() =>  copy(event, arrayForFormatting.po)}>{arrayForFormatting.po}
        </div>
        <p>{arrayForFormatting.buyer}</p>
        <p>{arrayForFormatting.sku}</p>
        <p>{arrayForFormatting.partCost}</p>
      </>
      }
    </>
  );
}

export default ImageReader;
