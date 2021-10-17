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
            default: Date.now
        },
        checkOut: {
            type: Date,
            default: Date.now
        },
        roomNo: {
            type: String,
            required: true
        }
    }
)

// Creating a model for Guests

const GuestModel = mongoose.model("guest", GuestSchema);

// Export the model

module.exports = GuestModel;



