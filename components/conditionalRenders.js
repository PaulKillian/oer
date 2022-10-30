import styles from "../styles/Home.module.css";
import { copy } from "../components/copy.js";

export const upsNum = (category) => {
    if (category.upsNumber) {
      return (
      <div id={styles.pointer}
        onClick={() =>  copy(category.upsNumber)}>Ups#: {category.upsNumber}
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
      <div id={styles.pointer}
        onClick={() =>  copy(category.truck)}>{category.truck}
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
         <div id={styles.pointer}
         onClick={() =>  copy(category.under)}>Under $100: {category.under}
         </div>
         <div id={styles.pointer}
         onClick={() =>  copy(category.over)}>Over $100: {category.over}
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