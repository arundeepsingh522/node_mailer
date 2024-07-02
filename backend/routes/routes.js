const express = require('express');
const sendMail = require('../controllers/MailController');
const router = express.Router();

router.get('/',(req,res)=>{

    res.send('hello');

});

router.post('/sendEmail',sendMail);


module.exports = router;