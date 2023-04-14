const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const users = require("./data/index")

const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://root:admin123@cluster0.9ib0bdx.mongodb.net/merntutorial?retryWrites=true&w=majority"
);

app.get("/getUsers", async (req, res) => {
  const db_users = await UserModel.find();
  res.status(201).json(db_users)
  
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();
  res.status(200).json(user);
});

app.listen(3001, () => {
  console.log("SERVER RUNS PERFECTLY!");
  //UserModel.insertMany(users);
});
