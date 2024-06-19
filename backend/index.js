const express = require('express');
const connectDB = require('./db'); // Corrected path to db.js
const app = express();
const port = 5000;
const MongoDB=require("./db")

app.use((req,res,next)=>{

    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})

connectDB();
// Middleware to parse JSON bodies
app.use(express.json());


// Routes
app.use('/api', require("./Routes/CreatUser")); // Corrected path

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
