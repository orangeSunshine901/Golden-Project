// Importing Mongoose
const mongoose  = require("mongoose");

//Creating a schema for GuestModels
const GuestSchema = new mongoose.Schema({
    
        firstname: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        emailId: {
            type: String,
            required: true
        },
        mobileNo: {
            type: String,
            required: true
        },
        checkIn: {
            type: Date,
            required: true
        },
        checkOut: {
            type: Date,
            required: true
        },
        roomNo: {
            type: String,
            required: true
        }
    }
);

// Creating a model for Guests

const GuestModel = mongoose.model("guests", GuestSchema);

// Export the model

module.exports = GuestModel;



