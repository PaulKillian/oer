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
    <ul>
      {company.map((category, index) => 
         <>
         <li
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(category.custNumber)}>
            Cust#: {category.custNumber}
         </li>
         <li 
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(category.dropShip)}>
            Cust#: {category.custNumber}
         </li>
         <li 
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(category.po)}>
            Cust#: {category.custNumber}
         </li>
         <li 
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(category.upsNumber)}>
            Cust#: {category.custNumber}
         </li>
         <li 
            key={index}
            className={styles.pointer}
            onClick={() =>  copy(category.custNumber)}>
            Cust#: {category.custNumber}
         </li>
      </>
      ))} 
    </ul>
    </>
  );
}
