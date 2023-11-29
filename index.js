const express = require("express")
require("dotenv").config()

//import connection
const {connection} = require("./config/db")
// import asset route 
const { assetRoute } = require("./route/asset.route")


const app = express()
app.use(express.json())


app.get("/", (req,res)=>{
    res.status(200).send("working")
})


//asset router middleware use 
app.use("/api" , assetRoute)

app.listen(process.env.port, async()=>{
    try {
        await connection
        console.log("Database is connected")
    } catch (error) {
        console.log(error)
    }
    console.log(`server running on port ${process.env.port}`)
})