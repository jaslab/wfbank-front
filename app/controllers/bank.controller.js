require('dotenv').config();
const db = require('../models');
const Bank = db.bank;

exports.getAll = async (req, res) => {
    await Bank.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Banks are empty');
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

    await Bank.findByPk(id)
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

    const bank = {
        id: req.body.id,
        name: req.body.name,
        accountType: req.body.accountType,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }

    await Bank.create(bank)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the Bank"
            });
        });
};

exports.update = async (req, res) => {
    const bank = {
        id: req.body.id,
        name: req.body.name,
        accountType: req.body.accountType,
        updatedBy: req.body.updatedBy
    }
    await Bank.update(
        bank, {
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