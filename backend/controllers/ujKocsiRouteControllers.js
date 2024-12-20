const Car = require('../models/Car');

exports.getUjKocsi = (req, res) => {
    try {
        return res.status(200).render('ujKocsi.ejs');
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

exports.postUjKocsi = async (req, res) => {
    try {
        const newCar = new Car(req.body);
        await newCar.save();
        return res.status(201).json({ msg: 'Sikeres feltöltés!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
