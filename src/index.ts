import express from "express";
import cors from "cors";
import { connectDB } from "./lib/db";

const app = express();
const PORT = process.env.PORT || 8080;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server started -> ${PORT}`);
    });
  } catch (err) {
    console.log("Something went wrong while starting the server:", err);
    process.exit(1); // Exit the process on failure
  }
};

startServer();