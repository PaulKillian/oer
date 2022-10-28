import * as React from "react";
import styles from "../styles/Home.module.css";
import { speedway, rpi, windy, luttys, ground, summit, central } from '../components/data.js'
import useEffect from 'react'
import Image from 'next/image'
import oer from '../public/oer-slideshow-5.jpg'

export default function Home() {
  const [company, setCompany] = React.useState('');
  const [click, setClick] = React.useState('ups');
  const [colors, setColors] = React.useState('');
  
  (function () {
    var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
    setColors(color)
  })
  
  console.log(colors)
  
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
       case 'PARTSPL':
        setCompany(parts)
        break;
      default: ''
    }
  }
  
  const upsNumber = () => {
   if (company.upsNumber) {
     return (
     <div id={styles.pointer}
       onClick={() =>  copy(company.upsNumber)}>Ups#: {company.upsNumber}
     </div>
    )
   } else {
     return (
     <div id={styles.hidden}
       onClick={() =>  copy(company.upsNumber)}>Ups#: {company.upsNumber}
     </div>
    )
   }
 }
 
  const under = () => {
   if (company.under) {
     return (
     <div id={styles.pointer}
       onClick={() =>  copy(company.under)}>Ups#: {company.under}
     </div>
    )
   } else {
     return (
     <div id={styles.hidden}
       onClick={() =>  copy(company.under)}>Ups#: {company.under}
     </div>
    )
   }
 }
 
 const copy = (toCopy) => {
   navigator.clipboard.writeText(toCopy)
 };

  return (
    <div className='flex'>
      <div>
       <select onChange={handleChange}>
         <option>Company</option>
         <option>CENTRAL</option>
         <option>GROUND</option>
         <option>LUTTY</option>
         <option>PARTSPL</option>
         <option>RPI</option>
         <option>SPEEDWAY</option>
         <option>SUMMIT</option>
         <option>WINDY</option>
       </select>
       <div id={styles.pointer} 
         onClick={() =>  copy(company.custNumber)}>Cust#: {company.custNumber}
       </div>
       {upsNumber()}
       <div id={styles.pointer} 
         onClick={() =>  copy(company.po)}>{company.po}
       </div>
       <div id={styles.pointer} 
         onClick={() =>  copy(company.dropShip)}>{company.dropShip}
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
      </div>
    <Image 
      src={oer}
      alt="oer pic"
    />
    </div>
  );
}
