import React from "react";
import styles from './Navbar.module.css';

const Navbar = () => {

    return (
    <div className= {styles.navitem}>
        <div className = {styles.imgcont}>
            <img src = '/Users/ibrahimarogundade/Desktop/gym_pages/Gympage/src/Subtract.png' alt = ''/>
        </div>
        <ul>
            <li>About Us</li>
            <li>Let's Talk</li>
        </ul>

    </div>
    )
}

export default Navbar;