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

app.post('/PersonalDetails',multerMid, PersonalDetails);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
