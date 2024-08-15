import { Request, Response } from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    auth0Id:{
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true
    },
    name:{
        type: String,

    },
    addressLine1:{
        type: String,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    }
});
const User = mongoose.model("User", userSchema)

export default User
// const createCurrentUser = async (req: Request, res: Response) => {

//     try {
//         const { auth0Id } = req.body;
//         const existingUser = await User.findOne({ auth0Id });

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Error creating user" });
//     }

// };
