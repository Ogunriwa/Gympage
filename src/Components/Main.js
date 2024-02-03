import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import styles from "./Main.module.css";
import WhyChooseUs from "./WhyChooseUs";
import MeetOurTrainers from "./MeetOurTrainer";
import Pricing from "./Pricing";
import Testemonials from "./Testemonials";


const Main = () => {

    return (
        <div className={styles.naveo}>
           <Hero/>
           <WhyChooseUs/>
           <MeetOurTrainers />
           <Pricing/>
           <Testemonials />
        </div>
    )

};

export default Main;