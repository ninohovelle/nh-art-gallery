import React, { Component } from 'react';
import Form from './Form';


class Contact extends Component {
    state = {
      fields: {}
    };
  
    onChange = updatedValue => {
      this.setState({
        fields: {
          ...this.state.fields,
          ...updatedValue
        }
      });
    };
  
    render() {
      return (
        <div className="App">
        <p className="about-item">
        Click on mail:  
        <a href="mailto:nino.hovel@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true"/> <strong> nino.hovel@gmail.com </strong> </a></p>

or fill the form below:

          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      );
    }
  }
    // return (
    //   <div className="container">
      
    //     <div className="columns">
    //       <div className="col-md-9 centered">
    //       <p>Please live the details in form below</p>

    //         <Form />
    //       </div>
    //     </div>
    //   </div>
    // );


export default Contact;