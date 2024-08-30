const mongoose = require("mongoose");
const PersonalDetailsModel = require("../Models/PersonalDetailsModel");
const ConnectDB = require("../utils/ConnectDB");
const cloudinary = require("../utils/Cloudinary");

const PersonalDetails = async (req, res) => {
    try {
        const { fullname, email, linkedinprofile, githubprofile, skills, city, stateaddress} = await req.body;
        const image = req.file.path;
        console.log(fullname);
        console.log(email);
        console.log(linkedinprofile);
        console.log(githubprofile);
        console.log(skills);
        console.log(city);
        console.log(stateaddress);
        console.log(image);

        if (!fullname || !email || !linkedinprofile || !githubprofile || !skills || !city || !stateaddress || !image) {
            return res.json({ message: "All Credentials required" });
        }

        await ConnectDB();

        const exists = await PersonalDetailsModel.findOne({ email });
        if (exists) {
            return res.json({ message: "Email already exists with other account" });
        }
        const upload = await cloudinary.uploader.upload(image, {
            folder: "Portfolio images"
        });

        if (!upload) {
            return res.json({ message: "Image upload failed" });
        }
        const profilepicurl = upload.secure_url;

        const newone = new PersonalDetailsModel({ fullname, email, linkedinprofile, githubprofile, skills, city, stateaddress, profilepicurl });
        const success = await newone.save();
        if (!success) {
            return res.json({ message: "Details adding failed. Try again" });
        }

        res.json({ message: "Details added successfully", success });

    } catch (error) {
        console.log(error);
        res.json({ message: "Something went wrong" });
    }
}

module.exports = PersonalDetails;
