import React from "react";
import styles from "./MeetOurTrainers.module.css";
import expert from "./unsplash_Z72YujnOrlY.png";
import instagram from "./Instagram svg.png"
import youtube from './youtube-fill.png'
import tiktok from "./TikTok svg.png"
import girlt from './TRAIGR.png'

const MeetOurTrainers = () => {

    return (
        <div className = {styles.tranars}>
            <div className= {styles.outrtainers}>
                <div className= {styles.statem}>
                    <h2>
                        Our Trainers
                    </h2>
                    <p>Meet fitness experts ready to help you achieve your goals</p>
                </div>

            </div>
            <div className= {styles.expimg}>
                <div className= {styles.exper}>
                    <div className= {styles.new}>
                        <div className= {styles.social}>
                            <p>John Doe</p>
                            <div className= {styles.insta}>
                                <img src= {instagram}/>
                                <img src= {tiktok}/>
                                <img src= {youtube}/>
                            </div>
                        </div>
                        <div className= {styles.absol}>
                            <img src = {girlt}/>
                        </div>
                    </div>
                </div>
                <div className= {styles.exper}>
                    <div className= {styles.new}>
                        <div className= {styles.social}>
                            <p>John Doe</p>
                            <div className= {styles.insta}>
                                <img src= {instagram}/>
                                <img src= {tiktok}/>
                                <img src= {youtube}/>
                            </div>
                        </div>
                        <div className= {styles.absol}>
                            <img src = {girlt}/>
                        </div>
                    </div>
                </div>
                <div className= {styles.exper}>
                    <div className= {styles.new}>
                        <div className= {styles.social}>
                            <p>John Doe</p>
                            <div className= {styles.insta}>
                                <img src= {instagram}/>
                                <img src= {tiktok}/>
                                <img src= {youtube}/>
                            </div>
                        </div>
                        <div className= {styles.absol}>
                            <img src = {girlt}/>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};


export default MeetOurTrainers;

