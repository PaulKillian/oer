import * as React from "react";
import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
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
import {truck, underOver, upsNum, custNum} from '../components/conditionalRenders.js'
import { copy } from "../components/copy.js";
import { AutoSearch } from "../components/autoSearch";
import ImageReader from "../components/imageReader";
import { Upload } from "../components/upload";

export default function Home() {
  const dealersAndImages = {
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
  const [image, setimage] = React.useState(oer);
  const [copied, setCopied] = React.useState('');

  return (
      <div className={styles.background}>
        <div className="d-flex align-items-center">
          <div style={{ paddingLeft: 5, paddingRight: 5 }}>
            <Image 
              width={230} 
              height={200}
              quality={100}
              src={image}
              alt="logo"
              objectFit='contain'
            />
          </div>  
          <AutoSearch 
            setDealers={setDealers}
            setimage={setimage}
            dealersAndImages={dealersAndImages}
          />
        </div>
        <div style={{color: 'red'}} className={styles.pointer}>CHANGE ADDRESS!</div>
        <div className='d-flex align-items-center'>
          {custNum(dealers)}
        </div>
        <div className='d-flex align-items-center'>
          <p id='po' className={styles.pointer}
            onClick={() =>  copy(event, dealers.po)}>{dealers.po}
          </p>
        </div>
        <div className='d-flex align-items-center'>
          {truck(dealers)}
        </div>
        <div>
          {underOver(dealers)}
        </div>
        <div className='d-flex align-items-center'>
          {upsNum(dealers)}
        </div>
        <div className='d-flex align-items-center'>
          <div id='dropShip' className={styles.pointer}
            onClick={() =>  copy(event, dealers.dropShip)}>{dealers.dropShip}
          </div>
        </div>
      {/* <ImageReader /> */}
      <Upload />
      <button type='submit'>Upload</button>
    </div>
  );
}
