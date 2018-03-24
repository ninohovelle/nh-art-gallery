import React, { Component } from 'react';
import picasso from '../images/picasso.jpg'
import vangogh from '../images/vangogh.jpg'


class Artists extends Component {
  render() {
    return (
      <div className="Blog section flex-container">
      <div className="item">
          <img src={picasso} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3><strong>Pablo Picasso</strong></h3>
              <p>Spanish Draftsman, Painter, Printmaker, and Sculptor</p>
              <p>The Three Musicians (1921)</p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={vangogh} className="thumb"/>
          <div className="blog-overlay">
            <div className="text">
              <h3><strong>Vincent van Gogh</strong></h3>
              <p>Dutch Draftsman and Painter</p>
              <p>Starry Night (1889)</p>
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default Artists;