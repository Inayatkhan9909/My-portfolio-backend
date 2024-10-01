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
app.use(express.static('public'))

// Routes

app.get('/', (req, res) => {
  // res.sendFile('index.html', {root: path.join(__dirname, 'public')});
  res.send('This is my about route..... ')
})

app.get('/about', (req, res) => {
   res.send('This is my about route..... ')
})


app.post('/PersonalDetails',multerMid, PersonalDetails);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


