// var nodemailer = require('nodemailer');
// require('dotenv').config()

import nodemailer from "nodemailer"
import dotenv from "dotenv"


dotenv.config()

// console.log(process.env.GOOGLE_MAIL_APP_PASSWORD);

const send = async ()=> {

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: '444nonsense@gmail.com',
            pass: process.env.GOOGLE_MAIL_APP_PASSWORD,
        }
    });
    
    var mailOptions = {
        from: '444nonsense@gmail.com',
        to: 'efenstakes101@gmail.com',
        subject: 'Sending Email using Node.js',
        // text: 'That was easy!'
        html: `<h1>Hola</h1>`
    };
    const response = await transporter.sendMail(mailOptions) 
    //   transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     }
    //   });

    console.log("response ", response);
}

// send()
//     .then((r)=> {

//         console.log("Done");
//     })
//     .catch((error)=> {

//         console.log("error ", error);
//     })

console.log("hello");
console.log("hello");
