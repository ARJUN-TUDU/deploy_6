const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const PORT = process.env.PORT || 8080 
const cors = require("cors");
dotenv.config();
app.use(cors());
app.use(express.json());
const MONGODB = process.env.MONGODB ;

const userSchema = mongoose.Schema({

    name : String , 
    age : Number, 
    value : Number

});

const User =  mongoose.model("employees",userSchema);

app.get("/",async(req,res)=>{
     

        const data = await User.find();
        return res.json(data).status(200);

    

});

app.post("/inserting",async (req,res)=>{
    
    const doc = new User(req.body);
    await doc.save();


})

const connectDb = async()=>{

    try{

        await mongoose.connect(MONGODB);


    }catch(e){

        console.log(e);

    }
}

connectDb();


app.listen(PORT,()=>{

    console.log("app started",PORT);

})




