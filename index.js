

const express = require('express');

const PORT = 8000;
const connectDB = require("./config/configdb");

const app = express();

const router = require('../CRUD/routes/userRoutes')

app.use(express.json());
app.use('/users', router)

connectDB();

app.listen(PORT, () => console.log(`Server is running ${PORT}`))
