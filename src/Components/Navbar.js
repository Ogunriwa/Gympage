import React from "react";
import styles from './Navbar.module.css';

const images = {
    image1 : "/Users/ibrahimarogundade/Desktop/gym_pages/Gympage/src/Components/Subtract.png"
}
;
const Navbar = () => {

    return (
    <div className= {styles.navitem}>
        <div className = {styles.imgcont}>
            <p>Gymbro</p>
            {/* <img src ={images.image1} alt = ''/> */}
            
        </div>
        
        <ul>
            <li>About Us</li>
            <li className={styles.letak}>Let's Talk</li>
        </ul>
        

    </div>
    )
};
export default Navbar;