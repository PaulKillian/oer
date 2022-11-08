import React, {useState} from 'react';
import styles from "../styles/Home.module.css";
import { copy } from './copy.js';

const orders = []

export const windyFormat = (text) => {
  text.map((text) => {
    // PO
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

    orders.push({
      po: po,
      firstName: firstName,
      lastName: lastName,
      partNumber: partNumber,
      description: description
    })
  })

  return (
    <>
      {orders.map((orders) => (
        <>
          <div className='d-flex align-items-center'>
            <div id='poOrder' className={styles.pointer}
                onClick={() => copy(event, orders.po)}>{orders.po}
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <div id='fName' className={styles.pointer}
              onClick={() => copy(event, orders.firstName)}>{orders.firstName}
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <div id='lName' className={styles.pointer}
                onClick={() => copy(event, orders.lastName)}>{orders.lastName}
            </div>
          </div>
          <div className='d-flex align-items-center'>
            <div id='partNumber' className={styles.pointer}
                onClick={() => copy(event, orders.partNumber)}>{orders.partNumber}
            </div>
          </div>
          <p>{orders.description}</p>
         </>
        )
      )}
    </>
  )
}
