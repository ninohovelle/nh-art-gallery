import React, { Component } from 'react';
import welcome_bg from '../images/main_image.jpg'

class Welcome extends Component {
  render() {

    return (
      <div className="Welcome section">
      <div className="item">
      <img src={welcome_bg} className="thumb"/>
        <h1 className="welcome-intro">Nino Hovelle ART Gallery

        <br/>
        </h1>
      </div>
      </div>
    );
  }
}
export default Welcome;
