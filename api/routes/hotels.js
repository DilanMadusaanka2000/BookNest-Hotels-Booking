import express from "express"
import Hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/veryfyToken.js";


const router = express.Router();

//create
router.post("/" , verifyAdmin, createHotel )


//update
router.put("/:id" , verifyAdmin, updateHotel)

//delete

router.delete("/:id" , verifyAdmin, deleteHotel)

//get

router.get("/:id" , getHotel)
//get all

router.get("/" , getHotels)
    

export default router ;