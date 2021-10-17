const express = require('express');
// .Router is used to only import the Router class
const router = express.Router();
const GuestModel = require('../models/GuestModel.js');

router.post(
    '/registration',
    function(req, res){
      const guestInfo = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailId: req.body.emailId,
        mobileNo: req.body.mobileNo,
        checkIn: req.body.checkIn,
        checkOut: req.body.checkOut,
        roomNo: req.body.roomNo
      };

      //Checking the room for availability
      GuestModel
      .findOne({ roomNo: guestInfo.roomNo })
      .then(
        function( dbDocument ){
          if (dbDocument){
            res.send("Room not available")
          } 
          
          else{
            //Reading data from the HTML file and sending it to the database
            GuestModel
            .create(guestInfo)
            .then(
                function(dbDocument){
                    res.json(dbDocument)
                }
            )
            .catch(
                function(mongooseError){
                  console.log(mongooseError)
                  res.send("Error Occured")
              }
            )
          }
        }
      )
      .catch(
        function(mongooseError) {
            console.log(mongooseError);
            res.send(mongooseError);
        }
    )
      
      
    // Gives an error of ERR_HTTP_HEADERS_SENT
    //   res.send("Working!");
    }
);

// router.post(
//   '/find',
//   function(req, res){
//     GuestModel
//     .findOne({ roomNo: req.body.roomNo })
//     .then(
//       function( dbDocument ){
//         if ( dbDocument ){
//           res.send("Room not available")
//         } else{
//           res.send("Room available")
//         }
//       }
//     )
//     .catch()
//   }
// )


module.exports = router;