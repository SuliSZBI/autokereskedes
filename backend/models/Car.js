const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema(
    {
        nev: {
            type: String,
            required: true,
        },
        tipus: {
            type: String,
            required: true,
        },
        ar: {
            type: Number,
            required: true,
        },
        kepek: [
            {
                type: String,
            },
        ],
    },
    { timestamps: true }
);

const CarModel = mongoose.model('car', CarSchema);

module.exports = CarModel;
