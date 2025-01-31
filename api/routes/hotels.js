import express from "express"
import Hotel from "../models/hotel.js";
import { createError } from "../utils/error.js";


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

router.delete("/:id" , async (req , res) => {
   
    

   
    try {
      
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted");
        
    } catch (err) {

        res.status(500).json(err)
        
    }
    
})

//get


router.get("/:id" , async (req , res, next) => {
   
    console.log("in a hotel route")
    return next()

   
    try {
      
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
        
    } catch (err) {

        res.status(500).json(err)
        
    }
    
})
//get all

router.get("/" , async (req , res, next) => {
   
    
  //const failed = true
 // if(failed) return next(createError(401, "You are not authorized to access this route"));
   
    try {
      
        const hotels = await Hotel.find();
        res.status(200).json(hotels)
        
    } catch (err) {

        next(err)
        
    }
    
})

export default router ;