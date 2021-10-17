// Importing express
const express = require("express");
const server = express();

//Importing Mongoose
const mongoose = require("mongoose");

//Importing the guest route
const guestRoute = require("./routes/guest-route.js")

//Importing the food-menu route
const foodMenuRoute =  require("./routes/foodMenu-route")

//Importing the spa-service route
const spaServiceRoute =  require("./routes/spaService-route")

//Connecting MongoDb to mongoose
const connectionString = "mongodb+srv://db_GoldenCamels:astro1234@cluster0.m6jwx.mongodb.net/goldenProject?retryWrites=true&w=majority";

//Configuring MongoDB connection to mongoose
const connectionConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(connectionString,connectionConfig)
.then(
    function(){
        console.log("This is a promise")
    }
)
.catch(
    function(dbError){
        console.log("error occured", dbError)
    }
);






// Configuration for post request
server.use(express.urlencoded({extended: false}));
// Configuration for JSON format
server.use(express.json());
//Configration for routes and '/guest' is implied
server.use('/guest', guestRoute);
//Configration for routes and '/food-menu' is implied
server.use('/food-menu', foodMenuRoute);
//Configration for routes and '/spa-service' is implied
server.use('/spa-services', spaServiceRoute);


// server.get(
//     '/',
//     function(req, res){
//         res.send("Guest registration successful")
//     }
// );



server.listen(
    3001,
    function(){
        console.log("Server is running on localhost:3001");
    }
);