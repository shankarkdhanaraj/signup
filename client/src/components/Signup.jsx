import React from 'react';
import { hot } from 'react-hot-loader';
import {
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import VpnKey from '@material-ui/icons/VpnKey';


function Signup() {
  return (
    <div>
      <div>
        <FormControl required>
          <InputLabel htmlFor="signup-first-name" className="first-name">First Name</InputLabel>
          <Input type="text" id="signup-first-name" className="first-name" placeholder="First Name" />
        </FormControl>
      </div>
      <div>
        <FormControl required>
          <InputLabel htmlFor="signup-last-name" className="last-name">Last Name</InputLabel>
          <Input type="text" id="signup-last-name" className="last-name" placeholder="Last Name" />
        </FormControl>
      </div>
      <div>
        <FormControl required>
          <InputLabel htmlFor="signup-email-address" className="email-address">Email</InputLabel>
          <Input
            type="email"
            id="signup-email-address"
            className="email-address"
            placeholder="drone@globex.com"
            startAdornment={
              (
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              )
            }
          />
        </FormControl>
      </div>
      <div>
        <FormControl required>
          <InputLabel htmlFor="signup-password" className="password">Password</InputLabel>
          <Input
            type="email"
            id="signup-password"
            className="password"
            startAdornment={
              (
                <InputAdornment position="start">
                  <VpnKey />
                </InputAdornment>
              )
            }
          />
        </FormControl>
      </div>
    </div>
  );
}


export default hot(module)(Signup);
