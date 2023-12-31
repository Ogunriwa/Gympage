import React from "react";
import styles from './Navbar.module.css';
import frameImage from './Frame 37251.jpg';

const images = {
    image1 : "/Users/ibrahimarogundade/Desktop/gym_pages/Gympage/src/Components/Subtract.png",
    image2 : "/Users/ibrahimarogundade/Desktop/gym_pages/Gympage/src/Components/Vector.png"
}
;
const Navbar = () => {

    return (
    <div className={styles.navig}>  
        <div className= {styles.navitem}>
            <div className = {styles.imgcont}>
                <p>Gymbro</p> 
            
                
            </div>
            
            <div className={styles.menu}>
                <a className= {styles.about}>About Us</a> 
                <a className= {styles.letak}>
                Let's Talk <img src = {frameImage}/></a>
                
                
                
            </div>
            

        </div>
    </div>  
    )
};
export default Navbar;



// {/* <a className= {styles.letak}>Let's Talk</a>
//             <img> src={images.image2}</img> */}