require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const User = db.user;
const saltRounds = 10;

exports.getAll = async (req, res) => {
    await User.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Users are empty');
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
}

exports.getOne = async (req, res) => {
    const id = req.params.id;

    await User.findByPk(id)
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
};

exports.create = async (req, res) => {
    //validations
    if (!req.body.email || !req.body.password) {
        res.status(404)
            .send({
                status: false,
                message: "Email and Password can't be empty."
            });
    }

    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)

    const user = {
        name: req.body.name,
        email: req.body.email,
        password: encryptedPassword,
        isadmin: false
    }

    await User.create(user)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the User"
            });
        });
};

exports.update = async (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isadmin: false,
    }
    await User.update(
        user, {
        where: { id: req.body.id, }
    })
        .then(data => {
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404);
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).send(
                {
                    message: err.message || 'Not Found'
                }
            );
        });
}