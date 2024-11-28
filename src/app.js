const express = require('express');
const cors = require('cors'); 
const userRoutes = require('./routes/UserRoutes');
const productRoutes = require('./routes/ProductRoutes');

const app = express();


const corsOptions = {
  origin: 'http://localhost:5173',  
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'], 
};


app.use(cors(corsOptions)); 

app.use(express.json());
app.use(userRoutes);
app.use(productRoutes);

module.exports = app;
