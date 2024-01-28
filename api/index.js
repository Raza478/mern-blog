import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from '../api/routes/user.route.js'
import authRoutes from '../api/routes/auth.route.js'


dotenv.config();
const app = express();
app.use(express.json());
mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log("MongoDb is connected");
    })
    .catch((err)=>{
        console.log(err);
    })
app.listen(3000, ()=>{
    console.log("your app is running on port 8000")
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes);
