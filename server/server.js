import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
//connect db
import connectDB from "./db/connect.js";
//router
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import authenticateUser from "./middleware/authenticate.js";
//cors
import cors from "cors";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}
//app.use(cors())
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(express.json());

app.get("/api/v1", (req, res) => {
  //throw new Error("error")
  res.json({ msg: "Welcome!" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => console.log(`✅Server started on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};
start();
