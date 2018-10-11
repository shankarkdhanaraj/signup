const express = require('express');
const bodyParser = require('body-parser');
const { getUserId, createNewUser, createNewUserProfile } = require('./utils.js');
// const createNewUser = require('./utils.js');
// const createNewUserProfile = require('./utils.js');

const PORT = process.env.PORT || 3000;


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
              res.send('profile created');
            } else {
              res.send('profile not created');
            }
          }, (error) => {
            console.log('error returned in profile creation call to profile microservice...', error.message);
          });
      } else {
        res.send('user already exists');
      }
    });

  // if (isExistingUser(email) === 'false') {
  //   let profile = {};
  //   createNewUser(password)
  //     .then((response) => {
  //       console.log('response from login service is...', response);
  //       const jsonResponse = JSON.parse(response);
  //       profile = {
  //         lastName,
  //         firstName,
  //         email,
  //         zipcode,
  //         userId: jsonResponse.username,
  //         // isActive: jsonResponse.isActive,
  //         // id: jsonResponse.id,
  //         // createdAt: jsonResponse.createdAt,
  //         // updatedAt: jsonResponse.updatedAt,
  //       };
  //       return createNewUserProfile(profile);
  //     })
  //     .then((responseFromProfileMS) => {
  //       if (responseFromProfileMS === 'created') {
  //         res.send(JSON.stringify(profile));
  //       } else {
  //         res.send('profile not created');
  //       }
  //     });
  // } else {
  //   res.send('user already exists');
  // }
});


app.listen(PORT);
