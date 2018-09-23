const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/signup', express.static('public'));
app.use('/signup', express.static('dist'));

app.get('/signup/createaccount', (req, res) => res.send('Signup Create'));
app.post('/signup/createaccount', (req, res) => res.send('Signup Success'));

app.listen(PORT);
