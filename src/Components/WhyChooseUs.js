import React from "react";
import styles from "./WhyChooseUs.module.css";


const WhyChooseUs = () => {

    return(
        <div className={styles.program}>
            <div className= {styles.nutri}>
                <h5 className={styles.nplan}>
                    Nutrition Plan
                </h5>
                <p>We provide personalized meal prep to help acheive your goal</p>
            </div>
            <div  className= {styles.nutri}>
                <h5>
                    Workout programs
                </h5>
                <p className= {styles.parap}>When you make your fitness journey a priority, we're here to help you make it a reality.</p>
            </div>
            <div  className= {styles.nutri}>
                <h5>
                    Best trainers
                </h5>
                <p>Our trainers have a proven track record of helping members achieve their fitness goals.</p>
            </div>

        </div>
    )

};


export default WhyChooseUs;