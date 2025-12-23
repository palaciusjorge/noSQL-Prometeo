const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const winnerSchema = new Schema(
{
name: { type: String, required: true },
nationality: { type: String, required: true },
team: { type: String },
year: { type: Number, required: true },
},
{
timestamps: true,
}
);


const Winner = mongoose.model('Winner', winnerSchema);
module.exports = Winner;