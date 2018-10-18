import { connect } from 'react-redux';
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updatePassword,
  updateZipcode,
  createAccount,
  toggleShowPassword,
} from '../actions/actions';
import Signup from '../components/Signup';


const mapDispatchToProps = dispatch => ({
  onFirstNameChange: firstName => dispatch(updateFirstName(firstName)),
  onLastNameChange: lastName => dispatch(updateLastName(lastName)),
  onEmailChange: email => dispatch(updateEmail(email)),
  onPasswordChange: password => dispatch(updatePassword(password)),
  onZipcodeChange: zipcode => dispatch(updateZipcode(zipcode)),
  createAccount: () => dispatch(createAccount()),
  onClickShowPassword: () => dispatch(toggleShowPassword()),
});

const mapStateToProps = ({
  showPassword,
  firstNameNotEntered,
  lastNameNotEntered,
  emailNotEntered,
  passwordNotEntered,
  zipcodNotEntered,
  accountFailureReason,
}) => ({
  showPassword,
  firstNameNotEntered,
  lastNameNotEntered,
  emailNotEntered,
  passwordNotEntered,
  zipcodNotEntered,
  accountFailureReason,
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
