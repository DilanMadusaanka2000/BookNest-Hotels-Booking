import jwt from 'jsonwebtoken';
import {createError} from '../utils/error.js'
import user from '../models/user.js';



export const verifyToken = (req, res, next) =>{

  const token = req.cookies.access_token;
  if(!token) {
    return next(createError(401, 'Access denied'));
}

jwt.verify(token, process.env.JWT, (err, user) =>{

    if(err) return next(createError(403, 'Invalid token'));
    req.user = user;
    next();
})

};

export const verifyUser = async (req, res, next) => {
    verifyToken(req, res, ()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403, "you are not authorized"));
        }
    })
}
export const verifyAdmin = async (req, res, next) => {
    verifyToken(req, res, next, ()=>{
        if(req.user.isAdmin){
            next()
        }else{
            if(err) return next(createError(403, "you are not authorized"));
        }
    })
}

