import { prismaClient } from "./prismaClient";

export const connectDB = async () => {
  try {
    await prismaClient.$connect();
    console.log("Successfully connected to database");
  } catch (err) {
    console.log("Something went wrong in connecting db", err);
    throw err
  }
};