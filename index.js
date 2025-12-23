const express = require('express');
const { connect } = require('./utils/db');
const Winner = require('./models/Winner');


connect();


const app = express();
const PORT = 3000;
const router = express.Router();


router.get('/winners', async (req, res) => {
try {
const winners = await Winner.find();
return res.status(200).json(winners);
} catch (error) {
return res.status(500).json(error);
}
});


router.get('/winners/id/:id', async (req, res) => {
try {
const winner = await Winner.findById(req.params.id);
return winner
? res.status(200).json(winner)
: res.status(404).json('Winner not found');
} catch (error) {
return res.status(500).json(error);
}
});


router.get('/winners/name/:name', async (req, res) => {
try {
const winners = await Winner.find({ name: req.params.name });
return res.status(200).json(winners);
} catch (error) {
return res.status(500).json(error);
}
});


router.get('/winners/nationality/:nationality', async (req, res) => {
try {
const winners = await Winner.find({ nationality: req.params.nationality });
return res.status(200).json(winners);
} catch (error) {
return res.status(500).json(error);
}
});


router.get('/winners/year/:year', async (req, res) => {
try {
const winners = await Winner.find({ year: { $gte: req.params.year } });
return res.status(200).json(winners);
} catch (error) {
return res.status(500).json(error);
}
});


app.use('/', router);


app.listen(PORT, () => {
});
