const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const personRoutes = require('./routes/personRoutes');
const loginRoutes = require('./routes/loginRoutes');


const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/persons', personRoutes);
app.use('/api/logins', loginRoutes);


module.exports = app;
