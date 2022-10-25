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
   if (settCompany.upsNumber) {
      console.log(setCompany.upsNumber)
     return (
     <div id={styles.pointer}
       onClick={() =>  copy(setCompany.upsNumber)}>Ups#: {setCompany.upsNumber}
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
         onClick={() =>  copy(setCompany.custNumber)}>Cust#: {setCompany.custNumber}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(setCompany.dropShip)}>{setCompany.dropShip}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(setCompany.po)}>{setCompany.po}
       </div>
       {upsNumber()}
        <div id={styles.pointer}
         onClick={() =>  copy(setCompany.ground)}>{setCompany.ground}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(setCompany.truck)}>{setCompany.truck}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(setCompany.under)}>Under $100: {setCompany.under}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(setCompany.over)}>Over $100: {setCompany.over}
       </div>
    </>
  );
}
