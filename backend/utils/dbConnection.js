const mongoose = require('mongoose');

const dbConnect = mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('error', (error) => {
    console.log(`Csatlakozási hiba: ${error.message}`);
});

db.once('open', () => {
    console.log('Csatlakoztatva az adatbázishoz!');
});

db.on('disconnected', () => {
    console.log('Lecsatlakoztatva az adatbázisról');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('Végleges lecsatlakozás!');
        process.exit(0);
    });
});

module.exports = { dbConnect, db };
