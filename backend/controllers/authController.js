import User from "../models/userModel.js";
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js'

// Signup
export const signup = async (req, res) => {
    const {fullname, username, password, confirmPassword, gender}=req.body;
    try {
        if(password!==confirmPassword){
            return res.status(400).json({error:"Password doesn't match"});
        }

        const user=await User.findOne({username});
        if(user){
            return res.status(400).json({error:"Username already exists"});
        }

        // Hash Password
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        // https://avatar-placeholder.iran.liara.run

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser=new User({
            fullname,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender==='male'? boyProfilePic:girlProfilePic
        })
        if(newUser){
            //Generate JWT token here
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();
            res.status(201).json({
                message:"Registered Successfully",
                _id:newUser._id,
                fullName:newUser.fullname,
                username:newUser.username,
                profilePic:newUser.profilePic,
            })
        }
        else{
            return res.status(401).json({error:"Invalid user data"});
        }


    } catch (err) {
        console.log("Error in signup controller",err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

// Login
export const login =async (req, res) => {
    try{
        
        const {username,password}=req.body;
        if(username==="" || password===""){
            return res.status(401).json({
                message:"Please fill the credentials"
            })
        }
        const user=await User.findOne({username});
        if(!user){
            return res.status(400).json({error:"User doesn't exist"});
        }
        const isPasswordCorrect=await bcrypt.compare(password,user.password);
        if(user){
            if(isPasswordCorrect){
                generateTokenAndSetCookie(user._id,res);
                res.status(200).json({
                    message:"loggedin successfully",
                    _id:user._id,
                    fullname:user.fullname,
                    username:user.username,
                    profilePic:user.profilePic,
                });
            }
            else{
                res.status(401).json({
                   message:"Password incorrect",
                });
            }
        }
       
    } catch (err) {
        console.log("Error in login controller",err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

//Logout
export const logout = (req, res) => {
    try{
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    }
    catch (err) {
        console.log("Error in logout controller",err.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}