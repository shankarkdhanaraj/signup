const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/signup', express.static('public'));
app.use('/signup', express.static('dist'));

app.post('/signup', (req, res) => res.end('Signup Success'));

app.listen(PORT);
