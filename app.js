require("dotenv").config();
const express=require('express');
const app=express();
const connectDB=require('./db/connect');

const Port=process.env.Port || 5000;

const products_routes=require('./routes/products')
app.get('/',(req,res)=>{
  res.send("hi i am live")
})

//middleware
app.use('/api/products',products_routes)


const start=async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(Port,()=>{
            console.log(`${Port} is connected`)
        })
 
    } catch (error) {
        console.log(error)
    }
}
start()