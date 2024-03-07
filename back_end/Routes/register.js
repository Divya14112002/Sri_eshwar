const express = require('express');
const {Register , validate } = require('../Models/registerModel')
const router = express.Router();



router.get('/',async(req,res)=>{
    let registers = await Register.find();
    res.send(registers);

});
router.post('/', async (req, res,next) => {
    try {
        const { error } = validate(req.body);

        if (error) {
            return res.status(400).json({
                status: 'error',
                message: error.details[0].message
            });
        }

        const register = new Register({
            userName: req.body.userName,
            enterPassword: req.body.enterPassword,
            reEnterPassword: req.body.reEnterPassword,
            fullname: req.body.fullname,
            prefname: req.body.prefname,
            phoneno: req.body.phoneno,
            secphoneno: req.body.secphoneno,
            email: req.body.email,
            contactmethod: req.body.contactmethod,
            position: req.body.position,
            institution: req.body.institution,
            dept: req.body.dept,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        });

        await register.save();

        res.status(201).json({
            status: 'success',
            data: register
        });
    } catch (error) {
        console.error('Error saving category:', error);
        next(error);
    }
});
router.put('/:id' , async (req,res) => {

    const {error} = validate(req.body)
    if(error) res.status(404).send(error.details[0].message)

    const register = await  Register.findByIdAndUpdate(req.params.id , {userName: req.body.userName,enterPassword: req.body.enterPassword, reEnterPassword: req.body.reEnterPassword, fullname: req.body.fullname, 
        prefname: req.body.prefname,phoneno: req.body.phoneno,secphoneno: req.body.secphoneno,email: req.body.email,contactmethod: req.body.contactmethod,position: req.body.position,
        institution: req.body.institution,dept: req.body.dept,city: req.body.city,state: req.body.state,zip: req.body.zip} , {new : true})
    
    if(!register) return res.status(404).send('the category with the given Id was not found')

    res.send(register);
})

router.delete('/:id',async (req,res) => {
    const register = await Register.findByIdAndDelete(req.params.id)
    if(!register) return res.status(404).send('the category with the given Id was not found')

    res.send(register);
})

router.get('/:id', async(req,res) => {
    const register = await Register.findById(req.params.id)
    if(!register) return res.status(404).send('the category with the given Id was not found')

    res.send(register);
})


module.exports = router;
