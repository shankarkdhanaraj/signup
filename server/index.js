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
              // isActive: jsonResponse.isActive,
              // id: jsonResponse.id,
              // createdAt: jsonResponse.createdAt,
              // updatedAt: jsonResponse.updatedAt,
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
              res.send('profile not created');
            }
          }, (error) => {
            console.log('error returned in profile creation call to profile microservice...', error.message);
          });
      } else {
        res.send('user already exists');
      }
    });
});


app.listen(PORT);
