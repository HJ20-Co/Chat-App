const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
require("dotenv").config();


mongoose.connect(process.env.MONGO_URL, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
}).then(()=>{
    console.log("DB Connection Successfull");
}).catch((err)=>{
    console.log(err.message);
});

app.use(cors());
app.use(express.json());

const server = app.listen(process.env.PORT,()=>{
    console.log(`Server Started on Port ${process.env.PORT})`);
    
});