import React from "react";
import styles from "./Testemonials.module.css"


const Testemonials = () => {
  return (
    <div className= {styles.second}>
        <div className= {styles.words}>
            <p>Hear from others</p>
            <h1>Testemonials</h1>
            <p>Happy clients makes us stronger and we are happy to share their story</p>

        </div>

        <div className={styles.right}>
            <div className= {styles.boxes1}>
                <div className= {styles.shape1}></div>
                <div className= {styles.shape2}></div>
            </div>

            <div className= {styles.boxes1}>
                <div className= {styles.shape2}></div>
                <div className= {styles.shape1}></div>
            </div>
        

        </div>

    </div>

  )

}

export default Testemonials;