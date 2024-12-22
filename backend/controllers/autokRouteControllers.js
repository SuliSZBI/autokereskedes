const Car = require('../models/Car');

exports.getAutok = async (req, res) => {
    try {
        let autok = await Car.find({});

        return res.status(200).json({ autok });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
