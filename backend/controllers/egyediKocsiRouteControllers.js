const Car = require('../models/Car');

exports.getEgyediKocsi = async (req, res) => {
    try {
        const auto = await Car.findById({ _id: req.params.id });
        const textareaSzoveg = auto.kepek.join('\n');
        return res
            .status(200)
            .render('egyedikocsi.ejs', { auto, textareaSzoveg });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

exports.modositEgyediKocsi = async (req, res) => {
    try {
        const { nev, tipus, ar, kepek } = req.body;
        await Car.findByIdAndUpdate(
            { _id: req.params.id },
            { nev, tipus, ar, kepek }
        );

        return res.status(200).json({ msg: 'Sikeres módosítás!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
