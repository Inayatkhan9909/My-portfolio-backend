const express = require('express');
const cors = require('cors');
const PersonalDetails = require('./Controllers/PersonalDetailsController');
require('dotenv').config();
const bodyparser = require("body-parser");
const multerMid = require('./middlewares/multer');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyparser.json());


// Routes

app.get('/', (req, res) => {
  res.send('Hey this is my API running 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})


app.post('/PersonalDetails',multerMid, PersonalDetails);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
