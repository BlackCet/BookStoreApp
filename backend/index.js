import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bookRoute from "./route/book_route.js";
import cors from "cors";
import userRoute from "./route/user_route.js";


dotenv.config();
mongoose.connect(process.env.MONGOURI);
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT;
const URI = process.env.MONGOURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log("Error:", error));

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log("MongoDB Atlas connected successfully");
});

