import React, { Component } from 'react';
import Welcome from './components/Welcome'
import About from './components/About'
import Artists from './components/Artists'
import Contact from './components/Contact'
import Form from './components/Form'
import NavBar from './components/NavBar'

import arrow from './images/arrow.gif'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <NavBar />
      <Welcome />
          <div className="down-arrow">
          <img src={arrow} alt="Sroll"  width="50px"/>
          </div>
        <h2 className="heading" id="about">ABOUT</h2>
          <About />
        <h2 className="heading" id="artists">ARTISTS</h2>
          <Artists />
        <h2 className="heading" id="contact">CONTACT</h2>
          <Contact />
      </div>
    );
  }
}
export default App;
