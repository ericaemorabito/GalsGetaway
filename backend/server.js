require("dotenv").config();

const express = require("express");
const tripRoutes = require('./routes/tripRoutes')
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// attaches routes to app
app.use('/api/trips', tripRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log("Connected to DB! Listening on PORT", process.env.PORT);
  });
})
.catch((error) => {
  console.log(error);
});
