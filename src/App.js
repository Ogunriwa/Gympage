import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';


import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer';


function App() {
  return (
    <div className= {styles.Backcolor}>
      <Navbar/>
      <Main/>
      <Footer/>
    
    </div>
  );
}

export default App;
