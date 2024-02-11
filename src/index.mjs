import { connectDB } from "./db/connect.mjs";
import express from "express";
import routes from "./routes/index.mjs";
import dotenv from "dotenv";
import notFound from "./middlewares/not-found.mjs";
import errorHandlerMiddlware from "./middlewares/error-handler.mjs";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("./src/public"));
app.use(express.json());

app.use(routes);
app.use(notFound);
app.use(errorHandlerMiddlware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();