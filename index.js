const express = require('express');
const { connect } = require('./utils/db');
const winnerRoutes = require('./routes/winner.routes');
const { getAllWinners } = require('./controllers/winner.controller');
connect();

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.get('/', getAllWinners); //Así muestro los ganadores en la ruta raíz
app.use('/', winnerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});