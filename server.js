const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Complaint = require("./models/Complaint");

const app = express();   // <-- app is created here

// Middleware
app.use(cors());
app.use(express.json());


// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/complaintDB")
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch((error)=>{
    console.log("MongoDB Error:", error);
});


// Test route
app.get("/", (req,res)=>{
    res.send("Backend is running");
});


// Submit Complaint API
app.post("/api/complaints", async(req,res)=>{

    try{

        const newComplaint = new Complaint({
            name:req.body.name,
            email:req.body.email,
            complaint:req.body.complaint
        });


        await newComplaint.save();


        res.status(200).json({
            message:"Complaint submitted successfully"
        });

    }
    catch(error){

        console.log(error);

        res.status(500).json({
            message:"Error submitting complaint"
        });

    }

});


// Server Start
app.listen(3001,()=>{
    console.log("Server running on port 3001");
});