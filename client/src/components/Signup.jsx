import React from 'react';
import { hot } from 'react-hot-loader';


function Signup() {
  return (
    <div>
      <div>
        <label htmlFor="signup-first-name" className="first-name">
          First Name
          <input type="text" className="first-name" id="signup-first-name" />
        </label>
      </div>
      <div>
        <label htmlFor="signup-last-name" className="last-name">
          Last Name
          <input type="text" className="last-name" id="signup-last-name" />
        </label>
      </div>
    </div>
  );
}

export default hot(module)(Signup);
