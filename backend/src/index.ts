import express,{Request,Response} from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

import myUserRoute from "./routes/MyUserRoute"

mongoose.connect(process.env.MONGODB_CONNECTION as string).then(()=>console.log("Connected to database successfully"))

const app = express();

app.use(express.json())
app.use(cors())

app.use("/api/my/user",myUserRoute);


app.get("/test",async(req:Request,res:Response)=>{
    res.json({messoge:"Hello"});

});

app.listen(7000,()=>{
    console.log("server started on localhost: 7000")
})