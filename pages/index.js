import * as React from "react";
import styles from "../styles/Home.module.css";

import { speedway, rpi, windy, luttys, ground, summit } from '../components/data.js'

export default function Home() {
   const [selectCompany, setSelectCompany] = React.useState('');
   const categories = ['custNumber', 'upsNumber', 'dropShip', 'po', 'truck', 'under', 'over']
  
  
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
   
 const renderCategories = () => {
   categories.map(category) => {
    <div id={styles.pointer}
      onClick={() =>  copy(selectCompany.category)}>Cust#: {selectCompany.category}
    </div>
   }
 }
  

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
//     <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.custNumber)}>Cust#: {selectCompany.custNumber}
//     </div>
    {renderCategoies()}
//     <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.dropShip)}>{selectCompany.dropShip}
//     </div>
//     <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.po)}>{selectCompany.po}
//     </div>
//      <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.ground)}>{selectCompany.ground}
//     </div>
//     <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.truck)}>{selectCompany.truck}
//     </div>
//     <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.under)}>Under $100: {selectCompany.under}
//     </div>
//     <div id={styles.pointer}
//       onClick={() =>  copy(selectCompany.over)}>Over $100: {selectCompany.over}
//     </div>
    </>
  );
}
