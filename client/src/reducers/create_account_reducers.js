import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_FAILURE,
} from '../actions/actions';


export function createAccountReducer(state = false, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return true;
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
      return 'Account Not';
    default:
      return state;
  }
}
