const express=require('express')
const connectDB = require('./config/db.js')
const app =express()
app.listen(10000, () => {
    console.log("app is running");
})


