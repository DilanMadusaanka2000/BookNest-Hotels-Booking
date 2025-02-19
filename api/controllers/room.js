import Room from "../models/room.js";
import Hotel from "../models/hotel.js";

import {createError} from "../utils/error.js";


export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const saveRoom = await newRoom.save();

        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: saveRoom._id}});
        } catch (err) {
            next(err)
        }
        res.status(200).json(saveRoom);
        
    } catch (err) {
        next(err)
    }

}





export const updateRoom = async (req, res, next ) => {
    
       
        try {
            await Room.updateOne({"roomNumbers_id":req.params.id})
            res.status(200).json(updateRoom)
            
        } catch (err) {
    
           next(err);
            
        }
}
export const updateRoomAvailability = async (req, res, next ) => {
    
       
        try {
          
          await Room.updateOne(
            { "roomNumbers._id": req.params.id },
            {
              $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
              },
            }
          );
          res.status(200).json("Room status has been updated.");
            
        } catch (err) {
    
           next(err);
            
        }
}


//detele

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: { rooms: req.params.id },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("Room has been deleted.");
    } catch (err) {
      next(err);
    }
  };



//get id

export const getRoom = async (req, res, next ) => {

    try {
         
           const room = await Room.findById(req.params.id)
           res.status(200).json(room)
           
       } catch (err)  {
    
           next(err);
            
        }
}




//get all


export const getRooms = async (req, res, next ) => {

    try {
         
           const rooms = await Hotel.find();
           res.status(200).json(rooms)
           
       } catch (err) {
    
           next(err);
            
        }
}