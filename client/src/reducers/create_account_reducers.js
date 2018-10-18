import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
  CREATE_ACCOUNT_STOP,
  BLOCK_NEW_ACCOUNT_NO_FIRST_NAME,
  BLOCK_NEW_ACCOUNT_NO_LAST_NAME,
  BLOCK_NEW_ACCOUNT_NO_EMAIL,
  BLOCK_NEW_ACCOUNT_NO_PASSWORD,
  BLOCK_NEW_ACCOUNT_NO_ZIPCODE,
  UPDATE_FIRST_NAME,
  UPDATE_LAST_NAME,
  UPDATE_EMAIL,
  UPDATE_PASSWORD,
  UPDATE_ZIPCODE,
  REQUIRED_FIELD_FILLED,
} from '../actions/actions';


export function createAccountReducer(state = false, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return true;
    case CREATE_ACCOUNT_STOP:
      return false;
    default:
      return state;
  }
}


export function createAccountSuccessReducer(state = null, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_SUCCESS:
      return 'Account Created';
    default:
      return state;
  }
}

export function createAccountFailureReducer(state = null, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_FAILURE:
      return 'Account Not Created';
    case BLOCK_NEW_ACCOUNT_NO_FIRST_NAME:
      return 'Account Not Created';
    case BLOCK_NEW_ACCOUNT_NO_LAST_NAME:
      return 'Account Not Created';
    case BLOCK_NEW_ACCOUNT_NO_EMAIL:
      return 'Account Not Created';
    case BLOCK_NEW_ACCOUNT_NO_PASSWORD:
      return 'Account Not Created';
    case BLOCK_NEW_ACCOUNT_NO_ZIPCODE:
      return 'Account Not Created';
    default:
      return state;
  }
}

export function failureReasonReducer(state = null, action) {
  switch (action.type) {
    case CREATE_ACCOUNT_FAILURE:
      return action.reason;
    default:
      return state;
  }
}

export function firstNameEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_NEW_ACCOUNT_NO_FIRST_NAME:
      return true;
    case UPDATE_FIRST_NAME:
      return false;
    default:
      return state;
  }
}

export function lastNameEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_NEW_ACCOUNT_NO_LAST_NAME:
      return true;
    case UPDATE_LAST_NAME:
      return false;
    default:
      return state;
  }
}

export function emailEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_NEW_ACCOUNT_NO_EMAIL:
      return true;
    case UPDATE_EMAIL:
      return false;
    default:
      return state;
  }
}

export function passwordEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_NEW_ACCOUNT_NO_PASSWORD:
      return true;
    case UPDATE_PASSWORD:
      return false;
    default:
      return state;
  }
}

export function zipcodeEntryChecker(state = false, action) {
  switch (action.type) {
    case BLOCK_NEW_ACCOUNT_NO_ZIPCODE:
      return true;
    case UPDATE_ZIPCODE:
      return false;
    default:
      return state;
  }
}


export function requiredFieldsFilledChecker(state = false, action) {
  switch (action.type) {
    case REQUIRED_FIELD_FILLED:
      return action.isFilled;
    default:
      return state;
  }
}