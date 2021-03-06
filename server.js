const express = require('express');
const cors = require('cors');
const path = require('path');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT);
