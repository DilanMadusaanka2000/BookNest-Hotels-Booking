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


mongoose.connection.on("disconnected", () =>{

    console.log("Disconnect monogoDB")
})




//middlewares

app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/hotel", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);





app.listen(8800, () => {
    connect()
    console.log("🚀 Server is start 🚀")
})