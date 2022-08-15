import express from "express";
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMidleware from "./middleware/error-handler.js";
import connectDB from "./db/connect.js"

import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  //throw new Error("error")
  res.send("Welcome!");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMidleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`✅Server started on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}
start()

