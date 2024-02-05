import React from "react";
import styles from "./Faq.module.css";
import chev from "./down.png"

const Faq = () => {

    return (
        <div className= {styles.last}>

            <div className= {styles.faq}>
                <h2>FAQ</h2>
                <div className= {styles.questions}>

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