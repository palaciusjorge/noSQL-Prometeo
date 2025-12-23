const mongoose = require('mongoose');
const Winner = require('../models/Winner');


const winners = [
{ name: 'Tadej Pogačar', nationality: 'Eslovenia', team: 'UAE Team Emirates', year: 2020 },
{ name: 'Tadej Pogačar', nationality: 'Eslovenia', team: 'UAE Team Emirates', year: 2021 },
{ name: 'Jonas Vingegaard', nationality: 'Dinamarca', team: 'Jumbo-Visma', year: 2022 },
{ name: 'Jonas Vingegaard', nationality: 'Dinamarca', team: 'Jumbo-Visma', year: 2023 },
{ name: 'Egan Bernal', nationality: 'Colombia', team: 'Ineos Grenadiers', year: 2019 },
{ name: 'Chris Froome', nationality: 'Reino Unido', team: 'Team Sky', year: 2013 },
{ name: 'Chris Froome', nationality: 'Reino Unido', team: 'Team Sky', year: 2015 },
{ name: 'Chris Froome', nationality: 'Reino Unido', team: 'Team Sky', year: 2016 },
{ name: 'Chris Froome', nationality: 'Reino Unido', team: 'Team Sky', year: 2017 },
{ name: 'Geraint Thomas', nationality: 'Reino Unido', team: 'Team Sky', year: 2018 }
];


const winnerDocuments = winners.map(winner => new Winner(winner));


mongoose
.connect('mongodb://localhost:27017/proyecto-tour-france', {
useNewUrlParser: true,
useUnifiedTopology: true,
})
.then(async () => {
const allWinners = await Winner.find();
if (allWinners.length) {
await Winner.collection.drop();
}
})
.then(async () => {
await Winner.insertMany(winnerDocuments);
console.log('Database created');
})
.catch(err => console.log(err))
.finally(() => mongoose.disconnect());
