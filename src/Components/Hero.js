import React from "react";
import styles from "./hero.module.css";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className={styles.heroitem}>
     
      <div className={styles.heron}>
        <div className={styles.strenj}>
          <h1>Strength</h1>
          <p>
            When you make your fitness<br /> journey a priority, we're here <br /> to
            help you make it a reality
          </p>
        </div>
        <div className={styles.concel}>
          <h1>Consistency, Excellence,</h1>
        </div>
        <div className={styles.unleash}>
          <div className= {styles.box1}></div>
          <div className= {styles.box2}></div>
          <div className= {styles.box3}></div>
          <div className= {styles.box4}></div>
          <div className= {styles.box5}></div>
          <div className={styles.fitp}>
            <div className={styles.perspl}>
              <p>We can help you create a personalized fitness plan</p>
            </div>
            <div className={styles.plan}>
              <h6>View Plans</h6>
            </div>
          </div>
          <div className= {styles.box5}></div>
          <div className= {styles.box4}></div>
          <div className= {styles.box3}></div>
          <div className= {styles.box2}></div>
          <div className= {styles.box6}></div>
          <div className={styles.unleashedd}>
            <p>Unleashed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;