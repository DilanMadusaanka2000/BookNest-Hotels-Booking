import Hotel from "../models/hotel.js";
import Room from "../models/room.js";




export const createHotel = async (req, res, next ) => {
   
     
    const newHotel = new Hotel(req.body)
        try {
         // console.log(req.body);

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


export const getHotels = async (req, res, next) => {
    const { min, max, ...others } = req.query;
    try {
      const hotels = await Hotel.find({
        ...others,
       // cheapestPrice: { $gt: min ?? 1, $lt: max ?? 999 },
         cheapestPrice: { $gt: min | 1, $lt: max || 999 },
      }).limit(req.query.limit);
      res.status(200).json(hotels);
    } catch (err) {
      next(err);
    }
  };


export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  };





export const countByType = async (req, res, next ) => {
    try {
        const hotelCount = await Hotel.countDocuments( {type:"hotel"} );
        const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
        const resortCount = await Hotel.countDocuments({ type: "resort" });
        const villaCount = await Hotel.countDocuments({ type: "villa" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin" });


        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: apartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
          ]);


    } catch (error) {
        next(error)
    }
}

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};


export const getHotelCount = async (req, res, next) => {
  try {
    const count = await Hotel.countDocuments();
    res.status(200).json(count);
  } catch (err) {
    next(err);
  }
};