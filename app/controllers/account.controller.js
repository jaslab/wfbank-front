require('dotenv').config();
const db = require('../models');
const Account = db.account;

exports.getAll = async (req, res) => {
    await Account.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Accounts are empty');
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

    await Account.findByPk(id)
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

    const account = {
        id: req.body.id,
        name: req.body.name,
        jobtitle: req.body.jobtitle,
        regfee: req.body.regfee,
        joinDate: req.body.joinDate,
        exitDate: req.body.exitDate,
        accStatus: req.body.accStatus,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }

    await Account.create(account)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the Account"
            });
        });
};

exports.update = async (req, res) => {
    const account = {
        name: req.body.name,
        jobtitle: req.body.jobtitle,
        regfee: req.body.regfee,
        joinDate: req.body.joinDate,
        exitDate: req.body.exitDate,
        accStatus: req.body.accStatus,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }
    await Account.update(
        account, {
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