const mongoose = require('mongoose');

const FoodMenuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        option: {
            type: String,
            required: true
        }

    }
)
const FoodMenuModel = mongoose.model("food-menu", FoodMenuSchema)

module.exports = FoodMenuModel;
