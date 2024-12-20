require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.get('/', (req, res) => {
    try {
        return res.status(200).json({ msg: 'Helló a főoldalon!' });
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
