import express from "express";
import dotent from "dotenv";
import mongoose from "mongoose";

import authRoute  from "./routes/auth.js"
import hotelsRoute  from "./routes/hotels.js"
import roomsRoute  from "./routes/rooms.js"
import usersRoute  from "./routes/users.js"

const app = express();
dotent.config()


 const connect = async () =>{
    try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to monogoDB")
    } catch (error) {
    
    throw error
  }
};
mongoose.connection.on("connected", () =>{

  console.log("Connected monogoDB")
})


mongoose.connection.on("disconnected", () =>{

    console.log("Disconnect monogoDB")
})




//middlewares

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);



//error handling
app.use((err, req, res, next) => {

  const errorStatus = err.status || 500
  const errorMessage = err.message || "somthing went worng"
   
 return res.status(errorStatus).json({
  success: false,
  status: errorStatus,
  message: errorMessage,
  stack: err.stack,
 })

  
    })





app.listen(8800, () => {
    connect()
    console.log("🚀 Server is start 🚀")
})