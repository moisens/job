import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
//connect db
import connectDB from "./db/connect.js";
//router
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

//cors
import cors from "cors";







if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"))
}
//app.use(cors())
app.use(express.json());

app.get("/api/v1", (req, res) => {
  //throw new Error("error")
  res.json({msg: "Welcome!"});
});

app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', jobsRouter)

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
}
start()

