import {
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_ZIPCODE,
  TOGGLE_PASSWORD_VISIBILITY,
} from '../actions/actions';

export function firstName(state = null, action) {
  switch (action.type) {
    case UPDATE_FIRST_NAME:
      return action.firstName;
    default:
      return state;
  }
}

export function lastName(state = null, action) {
  switch (action.type) {
    case UPDATE_LAST_NAME:
      return action.lastName;
    default:
      return state;
  }
}

export function email(state = null, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return action.email;
    default:
      return state;
  }
}

export function password(state = null, action) {
  switch (action.type) {
    case UPDATE_PASSWORD:
      return action.password;
    default:
      return state;
  }
}

export function zipcode(state = null, action) {
  switch (action.type) {
    case UPDATE_ZIPCODE:
      return action.zipcode;
    default:
      return state;
  }
}

export function toggleShowPassword(state = false, action) {
  switch (action.type) {
    case TOGGLE_PASSWORD_VISIBILITY:
      return !state;
    default:
      return state;
  }
}
