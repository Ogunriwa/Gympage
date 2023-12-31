import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import styles from "./Main.module.css";


const Main = () => {

    return (
        <div className={styles.naveo}>
           <Navbar/>
           <Hero/>
           
           

        </div>
    )

};

export default Main;