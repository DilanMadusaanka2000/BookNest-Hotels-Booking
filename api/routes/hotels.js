import express from "express"
import Hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/veryfyToken.js";


const router = express.Router();

//create
router.post("/" , createHotel )


//update
router.put("/:id" , verifyAdmin, updateHotel)

//delete

router.delete("/:id" , verifyAdmin, deleteHotel)

//get

router.get("/find/:id", getHotel);//get all

router.get("/" , getHotels)
router.get("/countByCity", countByCity);
router.get("/countByType" , countByType);
router.get("/room/:id", getHotelRooms);;
    

export default router ;