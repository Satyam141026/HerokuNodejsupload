const express = require('express')
const app=express();
const env=require('dotenv');
const fakeRoute = require('../Route/fakeRoute');
env.config();

app.use('/api',fakeRoute)


app.listen(process.env.PORT,()=>{

})