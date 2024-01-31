import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {

    return (
    <div className= {styles.prices}>
        <div className= {styles.cards}>
                <div className= {styles.costm}> 
                    <h2>
                        Pricing
                    </h2>
                    <p>Choose the plan that fits your needs</p>
                </div>

        </div>

        <div className= {styles.pricard}>
          
            <div className={styles.details}>
                <div className={styles.basic}>
                    <p>Basic</p>
                </div>    
                <div className= {styles.free}>
                    <h2>Free</h2>
                    <p>Snippet Services</p>
                </div>
                
                <div className={styles.butt}>
                    <button>Start Free trial </button>
                </div>
               

            </div>

            <div className={styles.details}>
                <div  className={styles.basic}>
                    <p>Basic</p>
                </div>   
                <div className= {styles.free}>
                    <div className= {styles.nofree}>
                        <h2> $15</h2>
                        <p>per month</p>
                        
                    </div>
                    <p>The best Option</p>
                    
                </div>
               
                <div className={styles.butt}>
                    <button>Start Free trial </button>
                </div>
                
            </div>
            <div className={styles.details}>
                <div  className={styles.basic}>
                    <p>Basic</p>
                </div>   
                <div className= {styles.free}>
                    <div className= {styles.nofree}>
                        <h2> $25</h2>
                        <p>per month</p>
                        
                    </div>
                    <p>Take your fitness to another level</p>
                </div>

                <div className={styles.butt}>
                    <button>Start Free trial </button>
                </div>
                
                    
               

            </div>
            
        </div>

    </div>

    
    )

}

export default Pricing;

