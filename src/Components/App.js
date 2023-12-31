import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import Main from './Main';
import Navbar from './Navbar';
import Footer from './Footer';
import WhyChooseUs from "./WhyChooseUs";




function App() {
  return (
    <div className= {styles.Backcolor}>
      
      <Main />
      <WhyChooseUs />
      <Footer />
      
    
    </div>
  );
};

export default App;

