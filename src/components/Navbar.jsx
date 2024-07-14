import React from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
  return (
   
    <div className='NavPage'>
     <div className={styles.Header}>
       <div className={styles.Options}>
        <h1> Home </h1> 
        <h1> Event </h1>
        <h1> Team  </h1>
       </div>
       <div className= {styles.logo}>
        <img src="logopic.jpg" alt="" />
       </div>
       <button className={styles.contact}>Contact Us</button>
       </div> 
    </div>
    
  )
}

export default Navbar