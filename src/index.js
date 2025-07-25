// require('dotenv').config({path: './env'})
import express from 'express'
import dotenv, { config } from 'dotenv'
import connectDB from "./db/index.js";
import app from './app.js'



dotenv.config({
    path : './.env'
})

// const app = express()

connectDB()
.then( () => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is runnning at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MONGO db connection is failed !!", err)
})












/*
import express from 'express'
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/$
        {DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR: ",error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.log("ERROR", error)
        throw error
    }
} )()

*/