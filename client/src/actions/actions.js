export const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
export const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';
export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const TOGGLE_PASSWORD_VISIBILITY = 'TOGGLE_PASSWORD_VISIBILITY';
export const CREATE_ACCOUNT_STOP = 'CREATE_ACCOUNT_STOP';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';
export const BLOCK_NEW_ACCOUNT_NO_FIRST_NAME = 'BLOCK_NEW_ACCOUNT_NO_FIRST_NAME';
export const BLOCK_NEW_ACCOUNT_NO_LAST_NAME = 'BLOCK_NEW_ACCOUNT_NO_LAST_NAME';
export const BLOCK_NEW_ACCOUNT_NO_EMAIL = 'BLOCK_NEW_ACCOUNT_NO_EMAIL';
export const BLOCK_NEW_ACCOUNT_NO_PASSWORD = 'BLOCK_NEW_ACCOUNT_NO_PASSWORD';
export const BLOCK_NEW_ACCOUNT_NO_ZIPCODE = 'BLOCK_NEW_ACCOUNT_NO_ZIPCODE';
export const REQUIRED_FIELD_FILLED = 'REQUIRED_FIELD_FILLED';

export function updateFirstName(firstName) {
  return {
    type: UPDATE_FIRST_NAME,
    firstName,
  };
}

export function updateLastName(lastName) {
  return {
    type: UPDATE_LAST_NAME,
    lastName,
  };
}

export function updateEmail(email) {
  return {
    type: UPDATE_EMAIL,
    email,
  };
}

export function updatePassword(password) {
  return {
    type: UPDATE_PASSWORD,
    password,
  };
}

export function updateZipcode(zipcode) {
  return {
    type: UPDATE_ZIPCODE,
    zipcode,
  };
}

export function startAccountCreation() {
  return {
    type: CREATE_ACCOUNT,
  };
}

export function blockNewAccountWithNoFirstName() {
  return {
    type: BLOCK_NEW_ACCOUNT_NO_FIRST_NAME,
  };
}

export function blockNewAccountWithNoLastName() {
  return {
    type: BLOCK_NEW_ACCOUNT_NO_LAST_NAME,
  };
}

export function blockNewAccountWithNoEmail() {
  return {
    type: BLOCK_NEW_ACCOUNT_NO_EMAIL,
  };
}

export function blockNewAccountWithNoPassword() {
  return {
    type: BLOCK_NEW_ACCOUNT_NO_PASSWORD,
  };
}

export function blockNewAccountWithNoZipcode() {
  return {
    type: BLOCK_NEW_ACCOUNT_NO_ZIPCODE,
  };
}

export function requiredFieldFilled(isFilled) {
  return {
    type: REQUIRED_FIELD_FILLED,
    isFilled,
  };
}


export function stopCreateAccount() {
  return {
    type: CREATE_ACCOUNT_STOP,
  };
}

export function createAccountSuccess(successMessage) {
  return {
    type: CREATE_ACCOUNT_SUCCESS,
    successMessage,
  };
}

export function createAccount() {
  function asyncCreateAccount(dispatch, getState) {
    const {
      firstName,
      lastName,
      email,
      password,
      zipcode,
    } = getState();

    if (firstName !== null
        && lastName !== null
        && email !== null
        && password !== null
        && zipcode !== null
    ) {
      dispatch(requiredFieldFilled(true));
      const data = {
        firstName,
        lastName,
        email,
        password,
        zipcode,
      };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        credentials: 'same-origin',
      };

      dispatch(startAccountCreation());
      return fetch('/signup', options)
        .then(
          response => response.json(),
          (error) => { console.log('An error occured...', error.message); },
        )
        .then(
          (text) => { dispatch(stopCreateAccount()); return dispatch(createAccountSuccess(text)); },
        );
    }
    if (firstName === null) {
      dispatch(stopCreateAccount());
      dispatch(blockNewAccountWithNoFirstName());
    }
    if (lastName === null) {
      dispatch(stopCreateAccount());
      dispatch(blockNewAccountWithNoLastName());
    }
    if (email === null) {
      dispatch(stopCreateAccount());
      dispatch(blockNewAccountWithNoEmail());
    }
    if (password === null) {
      dispatch(stopCreateAccount());
      dispatch(blockNewAccountWithNoPassword());
    }
    if (zipcode === null) {
      dispatch(stopCreateAccount());
      dispatch(blockNewAccountWithNoZipcode());
    }
    return dispatch(requiredFieldFilled(false));
  }

  return asyncCreateAccount;
}

export function toggleShowPassword() {
  return {
    type: TOGGLE_PASSWORD_VISIBILITY,
  };
}
