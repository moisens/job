import express from "express";
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMidleware from "./middleware/error-handler.js"


const app = express();

app.get('/', (req, res) => {
  //throw new Error("error")
  res.send('Welcome!')
})

app.use(notFoundMiddleware)
app.use(errorHandlerMidleware)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
