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
});
