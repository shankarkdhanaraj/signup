const express = require('express');
const bodyParser = require('body-parser');
const { getUserId, createNewUser, createNewUserProfile } = require('./utils.js');
// const createNewUser = require('./utils.js');
// const createNewUserProfile = require('./utils.js');

const PORT = process.env.PORT || 3000;
const API_GATEWAY_URL = process.env.API_GATEWAY_URL || 'http://18.191.158.114:8000/';


const app = express();
const jsonParser = bodyParser.json();

app.use('/signup', express.static('public'));
app.use('/signup', express.static('dist'));

app.post('/signup', jsonParser, (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    zipcode,
  } = req.body;

  getUserId(email)
    .then((doesUserExist) => {
      console.log('doesUserExist is ', doesUserExist);
      if (doesUserExist === 'false') {
        let profile = {};
        createNewUser(password)
          .then((response) => {
            console.log('response from login service is...', response);
            const jsonResponse = JSON.parse(response);
            profile = {
              lastName,
              firstName,
              email,
              zipcode,
              userId: jsonResponse.username,
            };
            return createNewUserProfile(profile);
          })
          .then((responseStatusFromProfileMS) => {
            if (responseStatusFromProfileMS === 201) {
              console.log('redirecting now....');
              res.status(302);
              res.redirect(`${API_GATEWAY_URL}`);
            } else {
              res.status(503);
              res.json({ status: false, reason: 'unknown reason' });
            }
          }, (error) => {
            console.log('error returned in profile creation call to profile microservice...', error.message);
          });
      } else {
        console.log('There is an existing user with the email...', email);
        res.json({ status: false, reason: 'existing email' }); // MORE GRACEFUL HANDLING
      }
    });
});


app.listen(PORT);
