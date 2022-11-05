import React, {useState} from 'react';
import styles from "../styles/Home.module.css";

export const windyFormat = (text) => {
  //PO
  let values = text.substring(text.indexOf("PO:") + 4);
  const po = values.substring(0, values.indexOf('Buyer:'));

  //FIRST NAME
  values = text.substring(text.indexOf("Buyer:") + 7);
  let buyer = values.substring(0, values.indexOf('SKU:'));
  const splitBuyer = buyer.split(' ');
  const firstName = buyer.substring(0, buyer.indexOf(' '));

  //LAST NAME
  const lastName = splitBuyer[1].substring(0, splitBuyer[1].indexOf('\n'));

  //PART NUMBER
  values = text.substring(text.indexOf("SKU:") + 5);
  const x = values.substring(values.indexOf(' ') + 16);
  const a = x.substring(0, x.indexOf(' '));
  const c = a.replace(/\s+/, '\x01').split('\x01')
  const partNumber = c[1].substring(0, c[1].indexOf('\n'));

  //DESCRIPTION
  const removeHttp = x.substring(x.indexOf(' '));
  const description = values.substring(0, values.indexOf('http'));

  return (
    <>
        <div id='poOrder' className={styles.pointer}
          onClick={() =>  copy(event, po)}>{po}
        </div>
        <div id='fName' className={styles.pointer}
          onClick={() =>  copy(event, firstName)}>{firstName}
        </div>
        <div id='lName' className={styles.pointer}
          onClick={() =>  copy(event, lastName)}>{lastName}
        </div>
        <div id='partNumber' className={styles.pointer}
          onClick={() =>  copy(event, partNumber)}>{partNumber}
        </div>
        <p>{description}</p>
      </>
  )
}
