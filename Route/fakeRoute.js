const express=require('express');
const fakeController = require('../Controller/fakeController');
const fakeRoute=express.Router();

fakeRoute.get('/' ,fakeController)
module.exports=fakeRoute;
