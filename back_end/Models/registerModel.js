
const mongoose = require('mongoose');
const Joi = require('joi')

const registerSchema = mongoose.Schema({
    userName : {type:String , required : true},
    enterPassword  :{type:String,required:true},
    reEnterPassword  :{type:String,required:true},
    fullname  :{type:String,required:true},
    prefname  :{type:String,required:true},
    phoneno  :{type:Number,required:true},
    secphoneno  :{type:Number,required:true},
    contactmethod  :{type:String,required:true},
    position  :{type:String,required:true},
    institution  :{type:String,required:true},
    dept  :{type:String,required:true},
    city  :{type:String,required:true},
    state  :{type:String,required:true},
    zip  :{type:Number,required:true}
})

const Register = mongoose.model('Register',registerSchema)

function validateData(register) {
    const schema = Joi.object({
        userName: Joi.string().min(3).required(),
        enterPassword : Joi.string().min(8).required(),
        reEnterPassword : Joi.string().min(8).required(),
        fullname: Joi.string().required(),
        prefname: Joi.string().min(5).required(),
        phoneno: Joi.number().min(10).required(),
        secphoneno: Joi.number().min(10).required(),
        email: Joi.string().required(),
        contactmethod : Joi.string().required(),
        position : Joi.string().required(),
        institution : Joi.string().required(),
        dept : Joi.string().required(),
        city : Joi.string().required(),
        state : Joi.string().required(),
        zip: Joi.number().required()
    });

    return schema.validate(register);
}




exports.Register=Register
exports.registerSchema=registerSchema
exports.validate=validateData

