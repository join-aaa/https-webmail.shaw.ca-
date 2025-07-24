require('dotenv').config();
const express = require('express');
const path = require('path');
const sendLogin = require('./send-email');

const app = express();
app.use(express.static('public'));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('index.html'));
app.get('/thank-you', (req, res) => res.render('thank-you.html'));

app.post('/send-email', async (req, res) => {
  try {
    await sendLogin(req.body);
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
