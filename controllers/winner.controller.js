const Winner = require('../models/Winner');

// GET ALL WINNERS
const getAllWinners = async (req, res) => {
  try {
    const winners = await Winner.find();
    return res.status(200).json(winners);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET WINNER BY ID
const getWinnerById = async (req, res) => {
  try {
    const winner = await Winner.findById(req.params.id);
    return winner
      ? res.status(200).json(winner)
      : res.status(404).json('Winner not found');
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET WINNERS BY NAME
const getWinnerByName = async (req, res) => {
  try {
    const { name } = req.params;
    const winners = await Winner.find({ name });
    return res.status(200).json(winners);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET WINNERS BY NATIONALITY
const getWinnerByNationality = async (req, res) => {
  try {
    const { nationality } = req.params;
    const winners = await Winner.find({ nationality });
    return res.status(200).json(winners);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// GET WINNERS FROM A GIVEN YEAR
const getWinnersFromYear = async (req, res) => {
  try {
    const { year } = req.params;
    const winners = await Winner.find({ year: { $gte: Number(year) } });
    return res.status(200).json(winners);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// CREATE WINNER
const createWinner = async (req, res) => {
  try {
    const newWinner = await Winner.create(req.body);
    return res.status(201).json(newWinner);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// UPDATE WINNER
const updateWinner = async (req, res) => {
  try {
    const updatedWinner = await Winner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return updatedWinner
      ? res.status(200).json(updatedWinner)
      : res.status(404).json('Winner not found');
  } catch (error) {
    return res.status(400).json(error);
  }
};

// DELETE WINNER
const deleteWinner = async (req, res) => {
  try {
    const deletedWinner = await Winner.findByIdAndDelete(req.params.id);

    return deletedWinner
      ? res.status(200).json('Winner deleted')
      : res.status(404).json('Winner not found');
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  getAllWinners,
  getWinnerById,
  getWinnerByName,
  getWinnerByNationality,
  getWinnersFromYear,
  createWinner,
  updateWinner,
  deleteWinner,
};

