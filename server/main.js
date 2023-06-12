import mongoose from "mongoose";
import express from "express";
import cors from "cors";

// initialising express app
const app = express();

app.use(express.json());

const HOST = "localhost";
const PORT = 5000;
const DB_URL = "mongodb+srv://AlfiyaShaikh_12:8UNdWwAEyVpZaJFO@stackoverflow-clone.by1jjip.mongodb.net/?retryWrites=true&w=majority";

app.use(
  cors({
    origin: "*",
  })
);

// home page
app.get("/", (req, res) => {
  res.send("Hello");
});

const options = {
  appName: "file-sharing",
  dbName: "file-sharing",
};

const connect_to_db = async () => {
  await mongoose.connect(DB_URL, options);
  console.log("Connected to database.");
};

// started listening server request
app.listen(PORT, (err) => {
  if (err) throw err;
  // connecting to database
  connect_to_db();
  console.log(`Server is running at : ${HOST}:${PORT}`);
});