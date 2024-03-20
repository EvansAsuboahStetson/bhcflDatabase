require('dotenv').config();

const express = require('express');
const connectDB = require('./src/config/db');
const userRoutes = require('./src/api/routes/userRoutes'); 
const donationRoutes = require('./src/api/routes/donationRoutes');
const app = express();
const cors = require('cors');

// Connect to MongoDB
connectDB();

// Enable CORS
app.use(cors());

app.use(express.json()); // for parsing application/json

// Use routes
app.use('/api', userRoutes); // Prefix all user routes with '/api'
app.use('/api', donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

