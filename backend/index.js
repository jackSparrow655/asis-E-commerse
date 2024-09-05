const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
 const router = require('./routes')


const app = express()
app.use(cors({
    origin : [process.env.FRONTEND_URL, 'http://localhost:3000'],
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())
app.get("/",(req,res)=>{
    res.send("<h1>Ecommerce_me</h1>");
  });

app.use("/api",router)

const PORT = 5000 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running on "+PORT)
    })
})