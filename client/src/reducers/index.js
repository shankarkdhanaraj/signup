import { combineReducers } from 'redux';
import {
  firstName,
  lastName,
  email,
  password,
  zipcode,
  toggleShowPassword,
} from './form_field_reducers';
import {
  createAccountReducer,
  createAccountSuccessReducer,
  createAccountFailureReducer,
  firstNameEntryChecker,
  lastNameEntryChecker,
  emailEntryChecker,
  passwordEntryChecker,
  zipcodeEntryChecker,
  requiredFieldsFilledChecker,
} from './create_account_reducers';

export default combineReducers({
  firstName,
  lastName,
  email,
  password,
  zipcode,
  showPassword: toggleShowPassword,
  isCreatingAccount: createAccountReducer,
  isAccountCreateSuccess: createAccountSuccessReducer,
  isAccountCreateFailure: createAccountFailureReducer,
  firstNameNotEntered: firstNameEntryChecker,
  lastNameNotEntered: lastNameEntryChecker,
  emailNotEntered: emailEntryChecker,
  passwordNotEntered: passwordEntryChecker,
  zipcodNotEntered: zipcodeEntryChecker,
  requiredFieldsFilled: requiredFieldsFilledChecker,
});
