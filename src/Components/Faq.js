import React from "react";
import styles from "./Faq.module.css";
import chev from "./down.png";
import { useState } from "react";



const Faq = () => {

    const [isActive, setIsActive] = useState(false);

    const clickHandler = () => setIsActive(!isActive); 

    
    return (
        <div className= {styles.last}>

            <div className= {styles.faq}>
                <h2>FAQ</h2>
                <div className= {styles.questions}>

                    <div className= {styles.noclickdiv} onClick={clickHandler}>
                        <div className= {styles.clickdiv}>
                            <h2>What are your qualifications</h2>
                            <img src ={chev}/>
                        </div>
                        {isActive && (<div className= {styles.ans}>
                            <p>I am a certified trainer</p> 
                        </div>)}
                        
                    </div>
                    <button>
                        <div className= {styles.butdiv}>
                            <h2>What are your qualifications</h2>
                            <img src ={chev}/>
                        </div>
                    </button>
                    <button>
                        <div className= {styles.butdiv}>
                            <h2>What are your qualifications</h2>
                            <img src ={chev}/>
                        </div>
                    </button>
                    <button>
                        <div className= {styles.butdiv}>
                            <h2>What are your qualifications</h2>
                            <img src ={chev}/>
                        </div>
                    </button>
                    <button>
                        <div className= {styles.butdiv}>
                            <h2>What are your qualifications</h2>
                            <img src ={chev}/>
                        </div>
                    </button>
                    <button>
                        <div className= {styles.butdiv}>
                            <h2>What are your qualifications</h2>
                            <img src ={chev}/>
                        </div>
                    </button>

                </div>
            </div>
        </div>
    )
}


export default Faq;