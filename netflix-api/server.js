const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/netflix")
    .then(() => {
        console.log("DB Connection Successful");
    })
    .catch((err) => {
        console.error("Error connecting to database:", err);
    });


app.use('/api/user', userRoutes);

app.listen(5000, () => {
    console.log('server started')
});