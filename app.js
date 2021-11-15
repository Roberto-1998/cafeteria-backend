require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config')

//Crear Servidor de Express
const app = express();

//DATABASE
dbConnection();

//Middlewares

//CORS
app.use(cors());

//JSON
app.use(express.json());

//Routes
app.use('/api/products', require('./routes/product'));



app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en puerto', process.env.PORT);
});