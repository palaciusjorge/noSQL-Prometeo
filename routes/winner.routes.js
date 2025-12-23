const express = require('express');
const {
  getAllWinners,
  getWinnerById,
  getWinnerByName,
  getWinnerByNationality,
  getWinnersFromYear,
  createWinner,
  updateWinner,
  deleteWinner,
} = require('../controllers/winner.controller');

const router = express.Router();

// GET
router.get('/winners', getAllWinners);
router.get('/winners/id/:id', getWinnerById);
router.get('/winners/name/:name', getWinnerByName);
router.get('/winners/nationality/:nationality', getWinnerByNationality);
router.get('/winners/year/:year', getWinnersFromYear);

// POST
router.post('/winners', createWinner);

// PUT
router.put('/winners/id/:id', updateWinner);

// DELETE
router.delete('/winners/id/:id', deleteWinner);

module.exports = router;

