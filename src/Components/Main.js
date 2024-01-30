import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import styles from "./Main.module.css";
import WhyChooseUs from "./WhyChooseUs";
import MeetOurTrainers from "./MeetOurTrainer";
import Pricing from "./Pricing";


const Main = () => {

    return (
        <div className={styles.naveo}>
           <Navbar/>
           <Hero/>
           <WhyChooseUs/>
           <MeetOurTrainers />
           <Pricing />
        </div>
    )

};

export default Main;