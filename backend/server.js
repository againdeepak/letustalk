
import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js'
import userRoutes from './routes/userRoute.js'
import cookieParser from 'cookie-parser';
import path from 'path'
import connectMongoDb from './db/dbConnection.js';
import {app,server} from './socket/socket.js'

const PORT=process.env.PORT || 4000;

const __dirname=path.resolve();


dotenv.config();
// parse incoming request
app.use(express.json());
// Parse cookie
app.use(cookieParser());


app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);
app.use('/api/users',userRoutes);

app.use(express.static(path.join(__dirname,'/frontend/dist')));

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
});


app.get('/',(req,res)=>{
    res.send(`Server is running on ${PORT}`);
})


server.listen(PORT,()=>{
    connectMongoDb();
    console.log(`Server is running on ${PORT}`)
});