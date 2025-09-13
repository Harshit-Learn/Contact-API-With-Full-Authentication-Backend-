import express from "express";
import mongoose from "mongoose";
import bodyParser from "express";
import  userRouter from './Routes/user.js'
import  contactRouter from './Routes/contact.js'
import {config} from 'dotenv'

const app = express();

// Take the data from req.body: act as middleware
app.use(bodyParser.json());

//config .env
config({path:'.env'})

//user Router:  act as middleware that'why we use use method except POST
app.use("/api/user", userRouter);

//contact Router:  act as middleware that'why we use use method except POST
app.use("/api/contact", contactRouter);


//home Route
app.get("/", (req, res) => {
  res.json({ message: "This is Home Route" });
});


//MongoDb connected with mongoose : mongoose.connect(' ' , { })

//NOTE: ENV variable ko use krne keliye>  process.env.MONGO_URI
mongoose
  .connect(process.env. MONGO_URT
    ,
    {
      dbName: "NodeJS_Course",
    }
  )
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log("Error is :", err));

//Server create
const port = process.env.PORT;
app.listen(port, () => console.log(`Server is running on port ${port}`));
