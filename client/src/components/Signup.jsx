import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
import {
  Input,
  TextField,
  InputLabel,
  FormControl,
  InputAdornment,
  Button,
  Icon,
  IconButton,
  Grid,
  Paper,
} from '@material-ui/core';
import Email from '@material-ui/icons/Email';
import VpnKey from '@material-ui/icons/VpnKey';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import AccountBox from '@material-ui/icons/AccountBox';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // height: 140,
    // width: 100,
    padding: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  button: {
    width: '100%',
    height: '100%',
  },
  signuperror: {
    color: '#FF0000',
  },
});
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

function Signup(props) {
  const {
    onFirstNameChange,
    onLastNameChange,
    onEmailChange,
    onPasswordChange,
    onZipcodeChange,
    createAccount,
    onClickShowPassword,
    showPassword,
    firstNameNotEntered,
    lastNameNotEntered,
    emailNotEntered,
    passwordNotEntered,
    zipcodNotEntered,
    accountFailureReason,
    classes,
  } = props;

  return (
    <div>
      <Grid container className={classes.root} spacing={12}>
        <form>
          <Paper className={classes.paper}>
            <Grid item xs={12}>
              <TextField
                required
                error={firstNameNotEntered}
                id="signup-first-name"
                label="First Name"
                placeholder="First Name"
                onChange={event => onFirstNameChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={lastNameNotEntered}
                id="signup-last-name"
                label="Last Name"
                placeholder="Last Name"
                onChange={event => onLastNameChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={zipcodNotEntered}
                id="signup-zipcode"
                label="Zipcode"
                placeholder="Zipcode"
                onChange={event => onZipcodeChange(event.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                error={emailNotEntered}
                id="signup-email-address"
                label="Email"
                placeholder="drone@globex.com"
                onChange={event => onEmailChange(event.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start"><Email /></InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl required error={passwordNotEntered}>
                <InputLabel error={passwordNotEntered} htmlFor="signup-password" className="password">Password</InputLabel>
                <Input
                  error={passwordNotEntered}
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
            </Grid>
          </Paper>
          <Paper className={classes.paper}>
            <Button variant="contained" color="primary" className={classes.button} onClick={() => createAccount()}>
              Create New Account
              <Icon><AccountBox /></Icon>
            </Button>
            {accountFailureReason !== null ? <InputLabel className={classes.signupnerror} htmlFor="signup-error">{`Account creation failed. Reason - ${accountFailureReason}`}</InputLabel> : null}
          </Paper>
        </form>
      </Grid>
    </div>
  );
}

Signup.propTypes = {
  onFirstNameChange: PropTypes.func.isRequired,
  onLastNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onZipcodeChange: PropTypes.func.isRequired,
  createAccount: PropTypes.func.isRequired,
  onClickShowPassword: PropTypes.func.isRequired,
  showPassword: PropTypes.bool.isRequired,
  firstNameNotEntered: PropTypes.bool.isRequired,
  lastNameNotEntered: PropTypes.bool.isRequired,
  emailNotEntered: PropTypes.bool.isRequired,
  passwordNotEntered: PropTypes.bool.isRequired,
  zipcodNotEntered: PropTypes.bool.isRequired,
};

// Signup.defaultProps = {
//   onFirstNameChange: event => event.target.value,
//   onLastNameChange: event => event.target.value,
//   onEmailChange: event => event.target.value,
//   onPasswordChange: event => event.target.value,
//   onZipcodeChange: event => event.target.value,
//   createAccount: event => event.target.value,
// };

export default hot(module)(withStyles(styles)(Signup));
