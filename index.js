const express = require('express');
require('dotenv').config();
const db = require('./db');
const app = express();
const PORT = process.env.PORT || 4000;
const router = require('./router');
app.use(express.json());

app.get('/welcome', (req, res)=>{
    return res.send('Bienvenido a mi app')
})

app.use(router)



db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));