import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const app = express()
mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("MongoDb is connected");
    })
    .catch((err)=>{
        console.log(err);
    })
app.listen(8000, ()=>{
    console.log("your app is running on port 8000")
})

