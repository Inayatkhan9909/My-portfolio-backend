const express = require('express');
const ConnectDB = require('./utils/ConnectDB')
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



ConnectDB();


// Routes
app.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

app.post('/projects', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
