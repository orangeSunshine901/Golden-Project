const express = require('express');
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

      //Reading data from the HTML file and sending it to the database
      GuestModel.create(guestInfo)
      .then(
          function(dbDocument){
              res.send(dbDocument)
          }
      )
      .catch(function(mongooseError){
          console.log(mongooseError)
          res.send("Error Occured line 70 server.js")
      })
      
    // Gives an error of ERR_HTTP_HEADERS_SENT
    //   res.send("Working!");
    }
);

module.exports = router;