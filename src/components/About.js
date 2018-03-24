import React, { Component } from 'react';
 class About extends Component {
  render() {
    return (
      <div className="About section">
        <p className="about-item">A few words about us - Nino Hovelle Gallery is a very famous gallery, located in  
  <a href="https://en.wikipedia.org/wiki/Tel_Aviv" target="_blank" rel="noopener noreferrer" 
  rel="noopener noreferrer"> <strong>the center of Tel Aviv, Israel </strong><i className="fa fa-external-link"/></a>. 
  Nino Hovelle, the artist, has founded the gallery only 2 days ago with a major success. 
  The gallery is so beautiful, all visitors immediately fell in love with it.</p> 
  <p className="about-item">Nino is so passionate about art and history of art.
  <a href="mailto:nino.hovel@gmail.com?Subject=Hello%20there!" target="_top" >
  <span><strong>Let her know if you're for collaboration, Click here and send a mail!</strong></span> <i className="fa fa-paper-plane" aria-hidden="true"/></a></p>     
  </div>
    );
  }
}

export default About;