const Car = require('../models/Car');

exports.getKocsik = async (req, res) => {
    try {
        let autok = await Car.find({});

        return res.status(200).render('kocsik.ejs', { autok });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};

exports.deleteKocsi = async (req, res) => {
    try {
        await Car.findByIdAndDelete({ _id: req.params.id });
        return res.status(200).json({ msg: 'Sikeres törlés!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
};
