const express = require("express");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
var cors = require("cors");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connectDatabase = require("./helper/connectDatabase");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

//Schema
const RobotSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
});

//Model
const RobotModel = mongoose.model("RobotModel", RobotSchema);

//Mongo Database
connectDatabase();

app.get("/api", (req, res) => {
  res.send("Hello API!");
});

//Post
app.post("/api/robots", async (req, res) => {
  const { name, description, imageURL } = req.body;
  const newRobot = new RobotModel({
    name: name,
    description: description,
    imageURL: imageURL,
  });
  await newRobot.save();
  res.status(201).send("Created");
});

//Get All Robot
app.get("/api/robots", async (req, res) => {
  const { name } = req.query;
  const robots = await RobotModel.find();
  if (!name) {
    res.status(200).send({
      data: robots,
      message: "Data get success!",
    });
  } else {
    res.status(200).send({
      data: robots.filter((x) =>
        x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
      ),
      message: "Data get success",
    });
  }
});

//Get By ID
app.get("/api/robots/:id", async (req, res) => {
  const { id } = req.params;
  const robot = await RobotModel.findById(id);
  if (!robot) {
    res.status(204).send("Data Not Found");
  } else {
    res.status(200).send(robot);
  }
});

//Delete by ID
app.delete("/api/robots/:id", async (req, res) => {
  const { id } = req.params;
  const robot = await RobotModel.findByIdAndDelete(id);
  if (!robot) {
    res.status(204).send("Data Not Found");
  } else {
    res.status(200).send("Data Deleted!");
  }
});

//Edit By ID
app.put("/api/robots/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, imageURL } = req.body;
  const existedRobot = await RobotModel.findByIdAndUpdate(id, {
    name: name,
    description: description,
    imageURL: imageURL,
  });
  if (!existedRobot) {
    res.status(204).send("Data Not Found");
  } else {
    res.status(200).send("Data Edited!");
  }
});

PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
