const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use('/', express.static('public'));
app.use('/', express.static('dist'));

app.post('/Signup', (req, res) => res.send('Signup Success'));

app.listen(PORT);
