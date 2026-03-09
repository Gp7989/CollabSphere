import User from "../models/User.js";
import bcrypt from "bcryptjs";

export const registerUser = async (req,res) => {
    try {
        const {name , email , password } = req.body;

        const userExists = await User.findOne({email});

        if (userExists){
            return res.status(400).json({
                message : "user already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword  = await bcrypt.hash(password , salt );

        const user = await User.create({
            name,
            email, 
            password: hashedPassword
        }) ;
        res.status(201).json({
            message : "user registered successfully",
            user : {
                id : user._id,
                name : user.name,
                email : user.email
            }
        });
    }
    catch (error) {
  console.log(error);   // important
  res.status(500).json({
    message: error.message
  });
}
};