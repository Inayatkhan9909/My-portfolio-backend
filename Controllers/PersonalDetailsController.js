const mongoose = require("mongoose");
const PersonalDetailsModel = require("../Controllers/PersonalDetailsController");


const PersonalDetails = async(req,res)=>{
    try {
        const {fullname,email,linkedinprofile,githubprofile,skills,city,stateaddress} = req.body;
    } catch (error) {
        console.log(error);
        res.json({ message: "Something went wrong" });
    }
}