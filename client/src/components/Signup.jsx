import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import {
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
  Button,
  Icon,
  IconButton,
  Grid,
} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import VpnKey from '@material-ui/icons/VpnKey';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import AccountBox from '@material-ui/icons/AccountBox';

// class Signup extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const {
//       onFirstNameChange,
//       onLastNameChange,
//       onEmailChange,
//       onPasswordChange,
//       onZipcodeChange,
//       createAccount,
//     } = this.props;
const Signup = ({
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onPasswordChange,
  onZipcodeChange,
  createAccount,
  onClickShowPassword,
  showPassword,
}) => (
  <div>
    <form>
      <Grid>
        <div>
          <FormControl required>
            <InputLabel htmlFor="signup-first-name" className="first-name">First Name</InputLabel>
            <Input type="text" id="signup-first-name" className="first-name" placeholder="First Name" onChange={event => onFirstNameChange(event.target.value)} />
          </FormControl>
        </div>
        <div>
          <FormControl required>
            <InputLabel htmlFor="signup-last-name" className="last-name">Last Name</InputLabel>
            <Input type="text" id="signup-last-name" className="last-name" placeholder="Last Name" onChange={event => onLastNameChange(event.target.value)} />
          </FormControl>
        </div>
        <div>
          <FormControl required>
            <InputLabel htmlFor="signup-zipcode" className="zipcode">Zipcode</InputLabel>
            <Input type="text" id="signup-zipcode" className="zipcode" placeholder="Zipcode" onChange={event => onZipcodeChange(event.target.value)} />
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
              onChange={event => onEmailChange(event.target.value)}
            />
          </FormControl>
        </div>
        <div>
          <FormControl required>
            <InputLabel htmlFor="signup-password" className="password">Password</InputLabel>
            <Input
              type={showPassword ? 'text' : 'password'}
              id="signup-password"
              className="password"
              startAdornment={
                (
                  <InputAdornment position="start">
                    <VpnKey />
                  </InputAdornment>
                )
              }
              endAdornment={
                (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="Toggle password visibility"
                      onClick={onClickShowPassword}
                      onMouseDown={event => event.preventDefault()}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }
              onChange={event => onPasswordChange(event.target.value)}
            />
          </FormControl>
        </div>
      </Grid>
      <Grid>
        <Button variant="contained" color="primary" className="create-new-account submit-form" onClick={() => createAccount()}>
          Create Account
          <Icon><AccountBox /></Icon>
        </Button>
      </Grid>
    </form>
  </div>
);


Signup.propTypes = {
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onZipcodeChange: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  onClickShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
};

// Signup.defaultProps = {
//   onFirstNameChange: event => event.target.value,
//   onLastNameChange: event => event.target.value,
//   onEmailChange: event => event.target.value,
//   onPasswordChange: event => event.target.value,
//   onZipcodeChange: event => event.target.value,
//   createAccount: event => event.target.value,
// };

export default hot(module)(Signup);
