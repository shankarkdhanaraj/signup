const express = require('express');
const bodyParser = require('body-parser');
const { isExistingUser, createNewUser, createNewUserProfile } = require('./utils.js');
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

  if (!isExistingUser(email)) {
    createNewUser(password)
      .then((response) => {
        const jsonResponse = JSON.parse(response);
        const profile = {
          lastName,
          firstName,
          email,
          zipcode,
          username: jsonResponse.username,
          isActive: jsonResponse.isActive,
          id: jsonResponse.id,
          createdAt: jsonResponse.createdAt,
          updatedAt: jsonResponse.updatedAt,
        };
        res.send(JSON.stringify(profile));
      });
  }
});


app.listen(PORT);
