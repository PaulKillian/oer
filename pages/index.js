import * as React from "react";
import styles from "../styles/Home.module.css";

import { speedway, rpi, windy, luttys } from '../components/data.js'

export default function Home() {
   const [selectCompany, setSelectCompany] = React.useState('');
  
  
  const handleChange = (e) => {
    switch(e.target.value) {
      case 'SPEEDWAY':
        setSelectCompany(speedway)
        break;
      case 'RPI':
        setSelectCompany(rpi)
        break;
      case 'WINDY':
        setSelectCompany(windy)
        break;
      case 'LUTTY':
        setSelectCompany(luttys)
        break;
      default: ''
    }
  }
  
 const copy = (toCopy) => {
   navigator.clipboard.writeText(toCopy)
  };
  

  return (
    <>
    <select onChange={handleChange}>
      <option>Company</option>
      <option>SPEEDWAY</option>
      <option>RPI</option>
      <option>WINDY</option>
      <option>LUTTY</option>
    </select>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.custNumber)}>Cust#: {selectCompany.custNumber}
    </div>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.upsNumber)}>Ups#: {selectCompany.upsNumber}
    </div>
    {selectCompany.dropShip !== undefined &&
      <div id={styles.pointer}
        onClick={() =>  copy(selectCompany.dropShip)}>{selectCompany.dropShip}
      </div>
    }
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.po)}>{selectCompany.po}
    </div>
     <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.ground)}>{selectCompany.ground}
    </div>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.truck)}>{selectCompany.truck}
    </div>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.under)}>Under $100: {selectCompany.under}
    </div>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.over)}>Over $100: {selectCompany.over}
    </div>
    </>
  );
}
