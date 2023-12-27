import React from "react";
import styles from "./hero.module.css"


const Hero = () => {
  return (
    <div className={styles.heroitem}>
        <div className={styles.strength}>
            <p>Strength </p>
            <p>When you make your fitness <br></br> journey a priority, we're here <br></br> to help you make it a reality</p>
        </div>
        <p>Consistency, Excellence</p>
        <div className={styles.unleashed}>
            <p>We can help you create a <br></br> personalized fitness plan <br></br> <br></br> <br></br> View Plans </p>
            <p>Unleased</p>
        </div>
    </div>
  )  
}

export default Hero;