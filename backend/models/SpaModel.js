const mongoose = require("mongoose");

const SpaSchema = new mongoose.Schema(
    {
        service: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        description: {
            type: String,
            required: true
        }

    }
);

const SpaModel = mongoose.model("spa-services", SpaSchema);

module.exports = SpaModel;