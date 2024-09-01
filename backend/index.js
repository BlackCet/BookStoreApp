import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book_route.js";
import cors from "cors";
import userRoute from "./route/user_route.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 4000;
const URI = process.env.MONGOURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.log("Error:", error));

// Route
app.get('/', (req, res) => {
  res.send('Hello!');
});


// Defining routes 
app.use("/book",bookRoute);
app.use("/user",userRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// const app = express();
// dotenv.config();
// const PORT=process.env.PORT || 4000;
// const URI=process.env.MONGOURI;

// // Connect to MongoDB
// try{
//   mongoose.connect(URI,{
//     useNewUrlParser:true, useUnifiedTopology: true
//   });
//   console.log("Connected to MongoDB");
// } catch(error){
//   console.log("Error:",error);
// }


// app.get('/', (req, res) => {
//   res.send('Hell!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is listening on port ${PORT}`);
// });