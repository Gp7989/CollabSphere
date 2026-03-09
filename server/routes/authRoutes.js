import express from "express";
import { registerUser } from "../controllers/authController.js";
const router = express.Router();

// router.get("/test",(req,res)=>{
//     res.json({
//         message: "Auth route working"
//     });
// });

router.post("/register" , registerUser );

export default router;