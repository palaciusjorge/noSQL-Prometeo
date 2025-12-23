const express = require('express');
const { connect } = require('./utils/db');
const winnerRoutes = require('./routes/winner.routes');

connect();

const app = express();
const PORT = 3000;

app.use(express.json());

// Rutas
app.use('/', winnerRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});