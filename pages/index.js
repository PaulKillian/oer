import * as React from "react";
import styles from "../styles/Home.module.css";

import { speedway, rpi, windy, luttys, ground, summit } from '../components/data.js'

export default function Home() {
   const [company, setCompany] = React.useState([]);
  
  
  const handleChange = (e) => {
    switch(e.target.value) {
      case 'SPEEDWAY':
        setSelectCompany([speedway])
        break;
      case 'RPI':
        setSelectCompany([rpi])
        break;
      case 'WINDY':
        setSelectCompany([windy])
        break;
      case 'LUTTY':
        setSelectCompany([luttys])
        break;
      case 'GROUND':
        setSelectCompany([ground])
        break;
       case 'SUMMIT':
        setSelectCompany([summit])
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
      {company.map((category, index) => (
         <div 
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(category.custNumber)}>
            Cust#: {category.custNumber}
         </div>
      ))} 
    </div>
    </>
  );
}
