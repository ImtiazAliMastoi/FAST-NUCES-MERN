// const mongoose = require('mongoose');
const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.SERVER_PORT;
const user_route = require ('./routers/users')

//MIDDLEWARE
app.use(express.json())


//API ROUTES
app.use('/api', user_route)
// mongoose.connect(process.env.MONGO_URI).then ((data) => console.log("connected successfully"))
// .catch ((err)=> console.log(err))






app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})