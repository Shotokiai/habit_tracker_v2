const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const sendOtp = require('./api/sendOtp');
const verifyOtp = require('./api/verifyOtp');

const app = express();
app.use(bodyParser.json());

app.post('/api/sendOtp', sendOtp);
app.post('/api/verifyOtp', verifyOtp);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
