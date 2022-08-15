import express from "express";
//middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";
//connect db
import connectDB from "./db/connect.js";
//router
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";
//dotenv
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  //throw new Error("error")
  res.send("Welcome!");
});

app.use('/api/v1/auth', authRouter)
app.use('.api/v1/jobs', jobsRouter)

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

