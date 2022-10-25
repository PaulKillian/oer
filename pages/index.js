import * as React from "react";
import styles from "../styles/Home.module.css";
import { speedway, rpi, windy, luttys, ground, summit } from '../components/data.js'

export default function Home() {
  const [company, setCompany] = React.useState('');
  
  const handleChange = (e) => {
    switch(e.target.value) {
      case 'SPEEDWAY':
        setCompany(speedway)
        break;
      case 'RPI':
        setCompany(rpi)
        break;
      case 'WINDY':
        setCompany(windy)
        break;
      case 'LUTTY':
        setCompany(luttys)
        break;
      case 'GROUND':
        setCompany(ground)
        break;
       case 'SUMMIT':
        setCompany(summit)
        break;
      default: ''
    }
  }
  
  const upsNumber = () => {
   if (company.upsNumber) {
      console.log(company.upsNumber)
     return (
     <div id={styles.pointer}
       onClick={() =>  copy(company.upsNumber)}>Ups#: {company.upsNumber}
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
         onClick={() =>  copy(company.custNumber)}>Cust#: {company.custNumber}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(company.dropShip)}>{company.dropShip}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(company.po)}>{company.po}
       </div>
       {upsNumber()}
        <div id={styles.pointer}
         onClick={() =>  copy(company.ground)}>{company.ground}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(company.truck)}>{company.truck}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(company.under)}>Under $100: {company.under}
       </div>
       <div id={styles.pointer}
         onClick={() =>  copy(company.over)}>Over $100: {company.over}
       </div>
    </>
  );
}
