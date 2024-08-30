const mongoose = require('mongoose');
require("dotenv").config();
const url = process.env.DB_URL;

const ConnectDB = async()=>{
if(mongoose.connections[0].readyState){
    console.log("Using existing connection")
    return;
}
try {
    await mongoose.connect(url, {
      serverSelectionTimeoutMS: 30000, 
    });
    console.log("Database Connected ")
} catch (error) {
    console.error(error);
}

}

module.exports = ConnectDB;