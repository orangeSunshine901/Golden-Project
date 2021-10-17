const express = require("express");

const router = express.Router();

const FoodMenuModel = require("../models/FoodMenuModel.js");

router.post(
    '/create',
    function(req, res){
        const foodMenu = {
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            option: req.body.option
        };

        FoodMenuModel.create(foodMenu)
        .then(
            function(foodMenu){
                res.send(foodMenu)
            }
        )
        .catch(function(optionError){
            console.log(optionError)
            res.send("Error")
        })
    }

 )

router.get(
    "/",
    function (req, res){
        const foodMenu = [
            {
                "name": "Butter Chicken",
                "description": "This is Butter chicken",
                "price": 80,
                "option": "Non-Veg"

            },
            {
                "name": "Palak Paneer",
                "description": "This is Palak Paneer",
                "price": 30,
                "option": "Veg"

            },
        ]
        res.send( foodMenu )
    }
)

router.get(
    "/find",
    function(req, res){
        
        const optionQuery = req.query.option;

        FoodMenuModel.find({option: optionQuery})
        .then(
            function(foodMenu){
                 res.send(foodMenu);
            }
        )
        .catch(
            function(optionError){
                console.log(optionError)
                res.send("Not available");
            }
        )

    }
)

module.exports = router;