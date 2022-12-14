import styles from "../styles/Home.module.css";
import { copy } from "../components/copy.js";

export const custNum = (category) => {
  if (category.custNumber) {
    return (
    <div className='d-flex align-items-center'>
      <div id={'custNum'} className={styles.pointer}
        onClick={() =>  copy(event, category.custNumber)}>Cust#: {category.custNumber}
      </div>
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
      <div className='d-flex align-items-center'>
        <div id={'upsNum'} className={styles.pointer}
          onClick={() =>  copy(event, category.upsNumber)}>Ups#: {category.upsNumber}
        </div>
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
      <div className='d-flex align-items-center'>
        <div id={'truck'} className={styles.pointer}
          onClick={() =>  copy(event, category.truck)}>{category.truck}
        </div>
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
