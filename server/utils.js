const fetch = require('node-fetch');
const profileURI = '';
const LOGIN_URI = 'http://localhost:3000/createlogin';

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
  return fetch(LOGIN_URI, options)
    .then(response => {console.log('Response sucess...',response); return response.text();},
      (error) => {console.log('Response fail...',error); return error.message;});
  // return true; //should return userID if successful
}

function createNewUserProfileInProfileMS(profile) {
  //code for sending the profile information - userID, firstname, lastname, email, zipcode
  return true;
}

function isExistingUser(email) {
  if (profileURI === '') {
    console.log('email to check is...', email);
    return false;
  }
  return true;
}

function createNewUser(password) {
  return createNewUserInLoginMS(password).then(response => response);
}

function createNewUserProfile(profile) {
  if (createNewUserProfileInProfileMS(profile)) {
    return 'success';
  }
  return 'fail';
}

module.exports.isExistingUser = isExistingUser;
module.exports.createNewUser = createNewUser;
module.exports.createNewUserProfile = createNewUserProfile;
