import React from "react";
import styles from "./hero.module.css";

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
        <div className={styles.unleashed}>
          <div className={styles.fitp}>
            <div className={styles.perspl}>
              <p>We can help you create a personalized fitness plan</p>
            </div>
            <div className={styles.plan}>
              <h3>View Plans</h3>
            </div>
          </div>
          <div className={styles.unleashedd}>
            <h1>Unleashed</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;