import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db"; // fixed function name

const app = express();
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB(); // fixed function name
    app.listen(PORT, () => {
      console.log(`Server started -> ${PORT}`); // fixed log to use PORT variable
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

startServer();