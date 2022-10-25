import * as React from "react";
import styles from "../styles/Home.module.css";

import { speedway, rpi, windy, luttys, ground, summit } from '../components/data.js'

export default function Home() {
   const [selectCompany, setSelectCompany] = React.useState('');
  
  
  const handleChange = (e) => {
     console.log(e.target.value)
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
      case 'GROUND':
        setSelectCompany(ground)
        break;
       case 'SUMMIT':
        setSelectCompany(summit)
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
      <option>GROUND</option>
      <option>LUTTY</option>
      <option>RPI</option>
      <option>SPEEDWAY</option>
      <option>SUMMIT</option>
      <option>WINDY</option>
    </select>
    <div>
      {categories.map((category, index) => (
         <div 
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(categories.custNumber)}>
            Cust#: {categories.custNumber}
         </div>
      ))} 
    </div>
    </>
  );
}
