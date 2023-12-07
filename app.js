import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 5000;
const username = process.env.USER;
const password = process.env.PASSWORD;
const dbName = "Blog";

app.use(express.json()) // It indicates what type of data receieved from the frontend to server

app.use("/api/user", router) // http://localhost:5000/api/user/logon



mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.okpeanj.mongodb.net/${dbName}?retryWrites=true&w=majority`
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));
