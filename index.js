const express=require('express')
const connectDB = require('./config/db.js')
const app =express()
app.listen(5000, () => {
    console.log("app is running");
})

