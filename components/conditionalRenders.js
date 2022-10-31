import styles from "../styles/Home.module.css";
import { copy } from "../components/copy.js";

export const custNum = (category) => {
  if (category.custNumber === "8449560") {
    return (
    <div id={'custNum'} className={styles.windyHover}
      onClick={() =>  copy(event, category.custNumber)}>Cust#: {category.custNumber}
    </div>
    )
  } else if (category.custNumber) {
    return (
    <div id={'custNum'} className={styles.pointer}
      onClick={() =>  copy(event, category.custNumber)}>Cust#: {category.custNumber}
    </div>
    )
  }   
    else {
    return (
    <div id={styles.hidden}></div>
    )
  }
}

export const upsNum = (category) => {
    if (category.upsNumber) {
      return (
      <div id={'upsNum'} className={styles.pointer}
        onClick={() =>  copy(event, category.upsNumber)}>Ups#: {category.upsNumber}
      </div>
      )
    } else {
      return (
      <div id={styles.hidden}></div>
      )
    }
  }

export const truck = (category) => {
    if (category.truck) {
      return (
      <div id={'truck'} className={styles.pointer}
        onClick={() =>  copy(event, category.truck)}>{category.truck}
      </div>
     )
    } else {
      return (
      <div id={styles.hidden}></div>
     )
    }
}

export const underOver = (category) => {
    if (category.under) {
      return (
       <>
         <div className='d-flex align-items-center'>
          <div id={'under'} className={styles.pointer}
            onClick={() =>  copy(event, category.under)}>Under $100: {category.under}
          </div>
         </div>
         <div className='d-flex align-items-center'>
          <div id={'over'} className={styles.pointer}
            onClick={() =>  copy(event, category.over)}>Over $100: {category.over}
          </div>
         </div>
         
       </>
     )
     } else {
         return (
           <>
           <div id={styles.hidden}></div>
           <div id={styles.hidden}> </div>
         </>
       )
     }
   }
