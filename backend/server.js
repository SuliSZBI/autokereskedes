require('dotenv').config();
const express = require('express');
const path = require('node:path');

const PORT = process.env.PORT || 5000;
const app = express();

// middleware-k
app.set('view engine', 'ejs');
app.use(express.json());

// statikus mappa beállítása
app.use(express.static(path.resolve(__dirname, 'public')));

// route-ok beállítása
app.use('/', require('./routes/mainRoutes'));
app.use('/ujkocsi', require('./routes/ujKocsiRoutes'));

// 404-es hiba!
app.all('*', (req, res) => {
    try {
        return res.status(404).render('404.ejs');
    } catch (error) {
        return res.status(500).json({ msg: error.message });
    }
});

// adatbázis csatlakozás
const { dbConnect } = require('./utils/dbConnection');

dbConnect
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Valami hiba történt: ' + error.message);
    });
