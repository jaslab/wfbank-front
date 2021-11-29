const db = require('../models');
const bcrypt = require('bcrypt');
require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = db.user;
const saltRounds = 10;

const generateAccessToeken = (uid) => {
    const accessToken = jwt.sign({ id: uid }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME });
    return accessToken;
}

exports.signout = async (req, res) => {
    const uid = req.userData.sub;
    const token = req.userData.token;
    res.status(200).send({
        message: 'Logout Success'
    })
}

exports.signIn = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    try {
        await User.findOne({ where: { email: email } })
            .then(data => {
                // TODO check data is null
                bcrypt.compare(password, data.password, function (err, result) {
                    if (result == true) {
                        const accessToken = generateAccessToeken(data.id);
                        res.send({
                            id:data.id,
                            user_name: data.name,
                            access_token: accessToken,
                        });
                    } else {
                        res.status(401)
                            .send({
                                status: false,
                                message: "Password not valid. "
                            });
                    }
                });
            })
            .catch(err => {
                res.status(402)
                    .send({
                        status: false,
                        message: "Username not valid. "
                    });
            });
    } catch (error) {
        res.status(403)
            .send({
                status: false,
                message: "Password or Username not valid. "
            });
    }
}





