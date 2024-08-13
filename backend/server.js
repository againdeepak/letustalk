
import express from 'express';
import dotenv from 'dotenv'
const app=express();
const PORT=process.env.PORT || 4000;

import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js'
import userRoutes from './routes/userRoute.js'
import cookieParser from 'cookie-parser';
import connectMongoDb from './db/dbConnection.js';



dotenv.config();
// parse incoming request
app.use(express.json());
// Parse cookie
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);



app.get('/',(req,res)=>{
    res.send(`Server is running on ${PORT}`);
})


app.listen(PORT,()=>{
    connectMongoDb();
    console.log(`Server is running on ${PORT}`)
});