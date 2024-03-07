
const mongoose = require('mongoose');
const Joi = require('joi')


const loginSchema=mongoose.Schema({
    userName:{type:String,required:true},
    enterPassword:{type:String,required:true}
})

const Login = mongoose.model('Login',loginSchema)

function validateData(Login) {
    const schema = Joi.object({
        userName: Joi.string().min(3).required(),
        enterPassword : Joi.string().min(8).required()
    });

    return schema.validate(Login);
}




exports.Login=Login
exports.loginSchema=loginSchema
exports.validate=validateData