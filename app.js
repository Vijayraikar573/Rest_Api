require("dotenv").config();
const express=require('express');
const app=express();
const connectDB=require('./db/connect');

const port=process.env.Port || 5000;

const products_routes=require('./routes/products')
app.get('/',(req,res)=>{
  res.send("hi i am live")
})

//middleware
app.use('/api/products',products_routes)


const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(port,"0.0.0.0",()=>{
            console.log(`${port} is connected`)
        })
 
    } catch (error) {
        console.log(error)
    }
}
start()