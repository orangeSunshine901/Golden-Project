const express = require("express");
const { model } = require("mongoose");

const router = express.Router();

const SpaModel = require("../models/SpaModel")

router.get(
    '/', 
    function (req, res){
        const spaService = [
            {
                "service": "Aromatherapy massage",
                "price": 550,
                "description": "Aromatherapy massages combine soft, gentle pressure with the use of essential oils. Your massage therapist will usually decide which essential oils to use, but you can let them know if you have a preference. Essential oils are diluted before being applied to the skin."
            }
        ]
        res.send( spaService )
    }
)

module.exports =  router;


