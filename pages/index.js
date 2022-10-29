import * as React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../styles/Home.module.css";
import { 
  speedway, 
  rpi, 
  windy,
  luttys, 
  ground, 
  summit, 
  central,
  parts 
} from '../components/data.js'
import useEffect from 'react'
import Image from 'next/image'
import oer from '../public/oer.png'
import summitImg from '../public/Summit Racing.png'
import speedwayImg from '../public/Speedway_Motors_Logo_300.png'
import luttysImg from '../public/luttys.png'
import partsplImg from '../public/partspl.png'
import rpiImg from '../public/rpi.jpeg'
import groundupImg from '../public/SS396_Main_Logo.png'
import comarocentralImg from '../public/camarocentral.gif'
import windyImg from '../public/windy.webp'

export default function Home() {
  const [company, setCompany] = React.useState('');
  const [click, setClick] = React.useState('ups');
  const [img, setImg] = React.useState(oer);
  
  const handleChange = (e) => {
    switch(e.target.value) {
      case 'SPEEDWAY':
        setCompany(speedway)
        setImg(speedwayImg)
        break;
      case 'RPI':
        setCompany(rpi)
        setImg(rpiImg)
        break;
      case 'WINDY':
        setCompany(windy)
        setImg(windyImg)
        break;
      case 'LUTTYS':
        setCompany(luttys)
        console.log(luttysImg)
        setImg(luttysImg)
        break;
      case 'GROUND':
        setCompany(ground)
        setImg(groundupImg)
        break;
       case 'SUMMIT':
        setCompany(summit)
        setImg(summitImg)
        break;
       case 'CENTRAL':
        setCompany(central)
        setImg(comarocentralImg)
        break;
       case 'PARTSPL':
        setCompany(parts)
        setImg(partsplImg)
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
       onClick={() =>  copy(company.under)}>Under $100: {company.under}
     </div>
    )
   } else {
     return (
     <div id={styles.hidden}
       onClick={() =>  copy(company.under)}>Under $100: {company.under}
     </div>
    )
   }
 }

 const over = () => {
  if (company.over) {
    return (
    <div id={styles.pointer}
      onClick={() =>  copy(company.over)}>Over $100: {company.over}
    </div>
   )
  } else {
    return (
    <div id={styles.hidden}
      onClick={() =>  copy(company.over)}>Over $100: {company.over}
    </div>
   )
  }
}
 
 const copy = (toCopy) => {
   navigator.clipboard.writeText(toCopy)
 };

  return (
      <div className="p-3">
        <div className="d-flex align-items-center">
          <div>
            <Image 
              width={230} 
              height={200}
              quality={100}
              src={img}
              alt="logo"
              objectFit='contain'
            />
          </div>
          <select onChange={handleChange}>
            <option>Company</option>
            <option>CENTRAL</option>
            <option>GROUND</option>
            <option>LUTTYS</option>
            <option>PARTSPL</option>
            <option>RPI</option>
            <option>SPEEDWAY</option>
            <option>SUMMIT</option>
            <option>WINDY</option>
          </select>
        </div>      
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
       {over()}
       {under()}
    </div>
  );
}
