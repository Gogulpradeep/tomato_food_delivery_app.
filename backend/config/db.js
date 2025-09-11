import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://mgogulpradeep:Gogul%401234@cluster0.w4ztepo.mongodb.net/food-del').then(
        ()=>console.log("DB Connected"))
}

// mongodb+srv://mgogulpradeep:Gogul@1234@cluster0.w4ztepo.mongodb.net/

//mongodb+srv://mgogulpradeep:<db_password>@cluster0.w4ztepo.mongodb.net/\