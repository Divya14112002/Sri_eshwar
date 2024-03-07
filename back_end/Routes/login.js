const express = require('express');
const {Login, validate}=require('../Models/loginModel');
const {Register} = require('../Models/registerModel');
const router=express.Router();



router.post('/', async (req, res) => {
try{
  
   const { error } = validate(req.body);
   if (error) {
     return res.status(400).json({ error: error.details[0].message });
   }

   const {userName,enterPassword}=req.body;
   const user = await Register.findOne({ userName, enterPassword });
   if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
   } 

   const login=new Login({
    userName,
    enterPassword
   });
   await login.save();

   res.json({message:'Login successful'});
 } catch (error) {
   
   console.error('Error during login:', error);
   return res.status(500).json({ error: 'Internal server error' });
 }
});

module.exports=router;
