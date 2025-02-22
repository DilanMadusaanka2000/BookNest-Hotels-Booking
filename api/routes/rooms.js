import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/room.js";
import { verifyAdmin } from "../utils/veryfyToken.js";


const router = express.Router();

  
  //create
  router.post("/:hotelid",createRoom )
  
  
  //update
  router.put("/:id" , verifyAdmin, updateRoom)
  router.put("/availability/:id", updateRoomAvailability);
  
  //delete
  
  router.delete("/:id" , deleteRoom)
  
  //get
  
  router.get("/:id" , getRoom)
  //get all
  
  router.get("/" , getRooms)
      

export default router ;