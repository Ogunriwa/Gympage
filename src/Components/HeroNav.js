import React from "react";
import Hero from "./Hero"
import Navbar from "./Navbar";
import styles from "./HeroNav.module.css"

const HeroNav = () => {

    return(
        <div className= {styles.heronavitem}>
            <Navbar/>
            <Hero/>
        </div>
       
    )

}


export default HeroNav;