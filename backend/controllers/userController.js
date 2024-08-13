import User from "../models/userModel.js";



export const getUserForSidebar=async (req,res)=>{
    try{
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select('-password')
        // $ne=> means, find all users except the logged users

        return res.status(200).json(filteredUsers);
    }
    catch(err){
        return res.status(500).json({
            error:"Internal server error"
        })
    }
}