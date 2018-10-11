const fetch = require('node-fetch');
// const profileURI = '';
const LOGIN_URI = process.env.LOGIN_URI || 'http://localhost:50000';
const PROFILE_SERVICE_URI = process.env.PROFILE_SERVICE_URI || 'http://18.191.254.197';

function checkForExistingUserInProfileMS(email) {
// code for checking with profile microservice to check for existing user
}

function createNewUserInLoginMS(password) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password: password }),
    credentials: 'same-origin',
  };
  return fetch(`${LOGIN_URI}/createlogin`, options)
    .then(response => response.text(),
      error => error.message);
}

function createNewUserProfileInProfileMS(profile) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(profile),
    credentials: 'same-origin',
  };
  const url = `${PROFILE_SERVICE_URI}/postprofile`;
  console.log('in createNewUserProfileInProfileMS...urs is...', url);
  return fetch(url, options)
    .then((response) => {
      console.log('response headers.....', response.headers);
      console.log('response status.....', response.status);
      console.log('response ok.....', response.ok);
      return response.status;
    }, error => error.message);
}

function getUserId(email) {
  console.log('email to check is...', email);
  console.log('PROFILE_SERVICE_URI - ', PROFILE_SERVICE_URI);
  const options = {
    method: 'GET',
  };
  const url = `${PROFILE_SERVICE_URI}/userId?email=${email}`;
  console.log('Profile url get is ....', url);
  return fetch(url, options)
    .then((response) => {
      if (response.status === 200) {
        return response.text();
      }
      return 'false';
    }, error => error.message);
}

function createNewUser(password) {
  return createNewUserInLoginMS(password).then(response => response);
}

function createNewUserProfile(profile) {
  return createNewUserProfileInProfileMS(profile).then(response => response);
  //Profile MS will return 'created' text if profile was successfully created
  //Profile MS will return 'not created' text if profile was not created
}

module.exports.getUserId = getUserId;
module.exports.createNewUser = createNewUser;
module.exports.createNewUserProfile = createNewUserProfile;
