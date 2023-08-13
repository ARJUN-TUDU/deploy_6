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
     
    try{

        const data = await User.find();
        res.json(data).status(200);

    }catch(err){

        res.status(400);

    }

});

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




