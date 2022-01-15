const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST'],
    credentials: true
}))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../', 'build')));

app.get('/', function (req, res){
    res.send('server is up.');
});


app.post('/', function(req, res){

    console.log(req.body);
    //FORM DATA
    const name = req.body.name;
    const message = req.body.message;
    const email = req.body.email;

    //SENDING MAIL
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'dkunwar7111@gmail.com',
            pass: "ynoxhbfkrcqbhdzr"
        }
    });

    const mailOptions = {
        form: email,
        to: 'dkunwar7111@gmail.com',
        subject: 'From Portfolio Site',
        text: `Message from ${name} : ${message}`
    };

    transporter.sendMail(mailOptions, function(err, info){
        
        if(err){
            res.send({
                error : err,
                mailSuccessfull : false
            });
            console.log(err);
        }else{
            res.send({
                mailSuccessfull : true
            });
            console.log(info);
            console.log("Successfully submitted form.");
        }
    });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 9000;
}

app.listen(port, function(){
    console.log(`Server is up and running in port ${port}.`);
});