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
        <div className= {styles.navbar}>
            <div className= {styles.navitem}>
                <div className = {styles.imgcont}>
                    <p>Gymbro</p>    
                </div>
                
                <div className={styles.menu}>
                    <a className= {styles.about}>About Us</a> 
                    <div className= {styles.letak}>
                        <p>Let's Talk </p>
                        <img src = {frameImage}/>
                    </div>
                    
                    
                    
                </div>
            

            </div> 
        </div>
    )
};
export default Navbar;



// {/* <a className= {styles.letak}>Let's Talk</a>
//             <img> src={images.image2}</img> */}