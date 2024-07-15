import express from "express"
import Hotel from "../models/hotel.js";


const router = express.Router();

//create
router.post("/" , async (req , res) => {
   
    const newHotel = new Hotel(req.body)

   
    try {
      
        const saveHotel = await newHotel.save()
        res.status(200).json(saveHotel)
        
    } catch (err) {

        res.status(500).json(err)
        
    }
    
})

//update
router.put("/:id" , async (req , res) => {
   
    

   
    try {
      
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        res.status(200).json(updateHotel)
        
    } catch (err) {

        res.status(500).json(err)
        
    }
    
})

//delete

//get

//get all

export default router ;