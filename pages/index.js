import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import styles from "../styles/Home.module.css";
import { 
  speedway, 
  rpi, 
  windy,
  luttys, 
  ground, 
  summit, 
  central,
  partspl 
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
import camarocentralImg from '../public/camarocentral.gif'
import windyImg from '../public/windy.webp'
import {truck, underOver, upsNum} from '../components/conditionalRenders.js'
import { copy } from "../components/copy.js";

export default function Home() {
  const company = {
    'speedway': { categories: speedway, image: speedwayImg },
    'rpi': { categories: rpi, image: rpiImg },
    'windy': { categories: windy, image: windyImg }, 
    'luttys': { categories: luttys, image: luttysImg },
    'ground': { categories: ground, image: groundupImg },
    'summit': { categories: summit, image: summitImg },
    'central': { categories: central, image: camarocentralImg },
    'partspl': { categories: partspl, image: partsplImg }
  }
  const [dealers, setDealers] = React.useState({})
  const [img, setImg] = React.useState(oer);
  const [copied, setCopied] = React.useState('');
  const [clicked, setClicked] = React.useState(false);

  const click = () => {
    if (clicked) {
      setClicked(false)
    } else {
      setClicked(true);
    }
  }
  
  const handleSelect = (e) => {
    setClicked(false);

    const dealer = e.toLowerCase();
    for (const key in company) {
      if (key === dealer) {
        setDealers(company[key].categories)  
        setImg(company[key].image) 
        return
      }
    }
  }

  console.log(clicked)

  return (
      <div className={`${clicked ? styles.background : styles.noBackground}`}>
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
          <div className={styles.font} 
            style={{ display: 'block', width: 700, padding: 30 }}
            onClick={click}>
            <Dropdown onSelect={handleSelect}>
              <Dropdown.Toggle className={styles.font}>
                DEALER
              </Dropdown.Toggle>
              <Dropdown.Menu className={styles.font}>
                <Dropdown.Item className={styles.itemBg}
                  eventKey='CENTRAL'>
                  CENTRAL
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='GROUND'>
                  GROUND
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='LUTTYS'>
                  LUTTYS
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='PARTSPL'>
                  PARTSPL
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='RPI'>
                  RPI
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='SPEEDWAY'>
                  SPEEDWAY
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='SUMMIT'>
                  SUMMIT
                </Dropdown.Item>
                <Dropdown.Item className={styles.itemBg} 
                  eventKey='WINDY'>
                  WINDY
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>  
        </div>  
       <div id={styles.pointer} 
         onClick={() =>  copy(dealers.custNumber)}>Cust#: {dealers.custNumber}
       </div>
       {truck(dealers)}
       {underOver(dealers)}
       {upsNum(dealers)}
       <div id={styles.pointer} 
         onClick={() =>  copy(dealers.po)}>{dealers.po}
       </div>
       <div id={styles.pointer} 
         onClick={() =>  copy(dealers.dropShip)}>{dealers.dropShip}
       </div>
       <div>{copied}</div>
    </div>
  );
}
