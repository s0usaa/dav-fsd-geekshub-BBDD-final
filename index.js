const express = require('express');
require('dotenv').config();
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));