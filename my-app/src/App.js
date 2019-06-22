import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/body'
import Footer from './components/footer'
import Image from './components/Image'



function App() {
  return (
    <div className="App">
     <Header />
     <img src="../public/body_image.png"/>
     <Body />
     <Footer />
    </div>
  );
}

export default App;
