import React, { Component } from 'react';
import { hot } from "react-hot-loader";


class Signup extends Component {

render() {
  return (
    <div>
      <div>
        <label htmlFor="signup-first-name" className="first-name">First Name </label>
        <input type="text" className="first-name" id="signup-first-name"/>
      </div>
      <div>
        <label htmlFor="signup-last-name" className="last-name">Last Name </label>
        <input type="text" className="last-name" id="signup-last-name"/>
      </div>
    </div>
  );
}

};

export default hot(module)(Signup);