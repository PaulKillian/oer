import * as React from "react";
import styles from "../styles/Home.module.css";

import { speedway, rpi, windy, luttys, ground, summit } from '../components/data.js'

export default function Home() {
   const [company, setCompany] = React.useState([]);
  
  
  const handleChange = (e) => {
    switch(e.target.value) {
      case 'SPEEDWAY':
        setCompany([speedway])
        break;
      case 'RPI':
        setCompany([rpi])
        break;
      case 'WINDY':
        setCompany([windy])
        break;
      case 'LUTTY':
        setCompany([luttys])
        break;
      case 'GROUND':
        setCompany([ground])
        break;
       case 'SUMMIT':
        setCompany([summit])
        break;
      default: ''
    }
  }
  
  const upsNumber = () => {
   if (selectCompany.upsNumber) {
      console.log(selectCompany.upsNumber)
     return (
     <div id={styles.pointer}
       onClick={() =>  copy(selectCompany.upsNumber)}>Ups#: {selectCompany.upsNumber}
     </div>
    )
   } else {
     return 'N/A'
   }
 }
  
 const copy = (toCopy) => {
   navigator.clipboard.writeText(toCopy)
  };

  return (
    <>
    <select onChange={handleChange}>
      <option>Company</option>
      <option>GROUND</option>
      <option>LUTTY</option>
      <option>RPI</option>
      <option>SPEEDWAY</option>
      <option>SUMMIT</option>
      <option>WINDY</option>
    </select>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.custNumber)}>Cust#: {selectCompany.custNumber}
    </div>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.dropShip)}>{selectCompany.dropShip}
    </div>
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.po)}>{selectCompany.po}
    </div>
    {upsNumber()}
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
  );
}
