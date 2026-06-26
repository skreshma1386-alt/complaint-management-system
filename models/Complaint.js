const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({

    name:String,

    email:String,

    complaint:String

});


module.exports = mongoose.model(
    "Complaint",
    complaintSchema
);