import Hotel from "../models/hotel.js";




export const createHotel = async (req, res, next ) => {

    const newHotel = new Hotel(req.body)
        try {
          
            const saveHotel = await newHotel.save()
            res.status(200).json(saveHotel)
            
        } catch (err) {
    
           next(err);
            
        }
}


//update

export const updateHotel = async (req, res, next ) => {
    
       
        try {
          
            const updateHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
            res.status(200).json(updateHotel)
            
        } catch (err) {
    
           next(err);
            
        }
}


//detele

export const deleteHotel = async (req, res, next ) => {

    try {
         
           await Hotel.findByIdAndDelete(req.params.id)
           res.status(200).json("Hotel has been deleted");
           
       } catch (err){
    
           next(err);
            
        }
}



//get id

export const getHotel = async (req, res, next ) => {

    try {
         
           const hotel = await Hotel.findById(req.params.id)
           res.status(200).json(hotel)
           
       } catch (err)  {
    
           next(err);
            
        }
}




//get all


export const getHotels = async (req, res, next ) => {

    try {
         
           const hotels = await Hotel.find();
           res.status(200).json(hotels)
           
       } catch (err) {
    
           next(err);
            
        }
}