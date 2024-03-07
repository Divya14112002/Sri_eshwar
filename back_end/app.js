const express=require('express')
const registers=require('./Routes/register')
const logins=require('./Routes/login')
const app=express()
const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1/sri_eshwar')
.then(()=>console.log("connection successful"))
.catch(err=>console.log("connection unsuccessful",err))

app.use(express.json());
app.use('/api/register' , registers)
app.use('/api/login', logins)


app.use((err, req, res, next) => {
    console.error('Global Error Handler:', err);
    res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});


const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}`));


