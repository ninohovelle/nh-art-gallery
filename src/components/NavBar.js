import React, { Component } from 'react';
import png from '../images/Untitled1.png' 


class NavBar extends Component {
  render() {
    return (
      <div>
        <ul className="NavBar">
        <li className="nav-item nav-name"><img src={png} /></li>
          <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
          <li className="nav-item"><a href="#artists" className="nav-link">Artists</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default NavBar;