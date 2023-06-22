import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from "dotenv";


import userRoutes from'./routes/users.js'
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'


const app =express();
dotenv.config();
app.use(express.json({limit: "30mb",extended: true}))
app.use(express.urlencoded({limit: "30mb",extended: true}))
app.use(cors());

app.get('/',(req,res)=> {
    res.send("This is stack overflow clone API")
})

app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT, ()=> console.log(`server running on: ${[PORT]}`)))
.catch((error)=> console.log(error.message));




































/*import express from "express";
import cors from "cors";
//import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
//import questionRoutes from "./routes/Questions.js";
//import answerRoutes from "./routes/Answers.js";
import connectDB from "./connectMongoDb.js";

//dotenv.config();
connectDB();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

 app.use('/',(req, res) => {
    res.send("This is a stack overflow clone API")
 })

app.use("/user", userRoutes);
//app.use("/questions", questionRoutes);
//app.use("/answer", answerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});*/


































































/*const CONNECTION="mongodb+srv://ShaikhAlfiya:RWClOkF8j8CmXV15@stack-overflow-clone.i8pb6ao.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION,{useNewUrlParser: true, useUnifiedTopology: true})
 .then(() => app.listen(PORT, () => {console.log(`server runing on port ${PORT}`)}))
  .catch((error) => console.log(error.message));*/
/*const PORT = process.env.PORT || 5000 
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});*/
/*RWClOkF8j8CmXV15*/













/*const CONNECTION_local= "mongodb+srv://AlfiyaShaikh_12:8UNdWwAEyVpZaJFO@stackoverflow-clone.by1jjip.mongodb.net/";
mongoose.connect(CONNECTION_local, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>app.listen(PORT, () => {
      console.log(`App is running at ${PORT}`);
    })
  )
  .catch((err) => {
    console.log(err.message);
  });*/

/* "mongodb+srv://AlfiyaShaikh_12:8UNdWwAEyVpZaJFO@stackoverflow-clone.by1jjip.mongodb.net/?retryWrites=true&w=majority"; */