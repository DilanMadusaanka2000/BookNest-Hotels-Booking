import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/user.js";
//import { verify } from "jsonwebtoken";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/veryfyToken.js";


const router = express.Router();

// router.get("/checkauthentication" , verifyToken, (req, res, next) => {
//     res.send("Hello your are loged in")
// })
// router.get("/checkuser/:id" , verifyUser, (req, res, next) => {
//     res.send("Hello your are loged in you can delete acount")
// })
// router.get("/checkadmin/:id" , verifyAdmin, (req, res, next) => {
//     res.send("Hello Admin your are loged in you can delete all acc")
// })

//update

router.put("/:id" , verifyUser, updateUser,)

//delete

router.delete("/:id" , verifyUser, deleteUser)

//get

router.get("/:id" , verifyUser, getUser)
//get all

router.get("/" , getUsers)

export default router ;