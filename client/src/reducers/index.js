import { combineReducers } from 'redux';
import {
  firstName,
  lastName,
  email,
  password,
  zipcode,
  toggleShowPassword,
} from './form_field_reducers';

export default combineReducers({
  firstName,
  lastName,
  email,
  password,
  zipcode,
  showPassword: toggleShowPassword,
});
