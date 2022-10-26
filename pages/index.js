import * as React from "react";
import styles from "../styles/Home.module.css";
import { speedway, rpi, windy, luttys, ground, summit, central } from '../components/data.js'

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
       case 'CENTRAL':
        setCompany(central)
        break;
      default: ''
    }
  }
  
  const upsNumber = () => {
   if (company.upsNumber) {
      console.log(company.upsNumber)
     return (
     <div id={'1'} className={styles.pointer}
       onClick={() =>  copy(company.upsNumber)}>Ups#: {company.upsNumber}
     </div>
    )
   } else {
     return 'N/A'
   }
 }
 
 const copyMoreMore = () => {
   navigator.clipboard.writeText(company.dropShip)
 }
 
 const copyMore = () => {
   navigator.clipboard.writeText(company.po)
   copyMoreMore()
 }
  
 const copy = (toCopy) => {
   if(!toCopy) {
     document.getElementById("1").click();
     document.getElementById("2").click();
     document.getElementById("3").click();
 } else {
     navigator.clipboard.writeText(toCopy)
    }
  };
   

  return (
    <>
       <select onChange={handleChange}>
         <option>Company</option>
         <option>CENTRAL</option>
         <option>GROUND</option>
         <option>LUTTY</option>
         <option>RPI</option>
         <option>SPEEDWAY</option>
         <option>SUMMIT</option>
         <option>WINDY</option>
       </select>
       <div id={styles.pointer} className={styles.pointer}
         onClick={() =>  copy(company.custNumber)}>Cust#: {company.custNumber}
       </div>
       <div onClick={() =>  copy()}>ups, po, drop</div>
       {upsNumber()}
       <div id={'2'} className={styles.pointer}
         onClick={() =>  copy(company.po)}>{company.po}
       </div>
       <div id={'3'} className={styles.pointer}
         onClick={() =>  copy(company.dropShip)}>{company.dropShip}
       </div>
       <div className={styles.pointer}
         onClick={() =>  copy(company.ground)}>{company.ground}
       </div>
       <div className={styles.pointer}
         onClick={() =>  copy(company.truck)}>{company.truck}
       </div>
       <div className={styles.pointer}
         onClick={() =>  copy(company.under)}>Under $100: {company.under}
       </div>
       <div className={styles.pointer}
         onClick={() =>  copy(company.over)}>Over $100: {company.over}
       </div>
    </>
  );
}
