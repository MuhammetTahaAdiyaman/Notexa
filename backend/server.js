const express = require('express');
const dotenv = require('dotenv').config();
const { hataYakalama } = require("./middlewares/errorMiddleware");
const baglan = require("./config/db");
const PORT = process.env.PORT;
const app = express();
const notRoutes = require("../backend/routes/notRoute");
const kullaniciRoutes = require("../backend/routes/kullaniciRoute")
const colors = require("colors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/notlar', notRoutes);
app.use('/api/kullanicilar', kullaniciRoutes);
app.use(hataYakalama);
baglan();
app.listen(PORT, () => console.log(`Server ${PORT} üzerinden yayında`.magenta.italic));
