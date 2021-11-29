require('dotenv').config();
const db = require('../models');
const Memberfee = db.memberfee;

exports.getAll = async (req, res) => {
    await Memberfee.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Memberfees are empty');
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

    await Memberfee.findByPk(id)
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

    const memberfee = {
        amt1: req.body.amt1,
        amt2: req.body.amt2,
        amt3: req.body.amt3,
        total: req.body.total,
        year: req.body.year,
        month: req.body.month,
        memfeeStatus: req.body.memfeeStatus,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        accountId:req.body.accountId
    }

    await Memberfee.create(memberfee)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the Memberfee"
            });
        });
};

exports.update = async (req, res) => {
    const memberfee = {
        amt1: req.body.amt1,
        amt2: req.body.amt2,
        amt3: req.body.amt3,
        total: req.body.total,
        year: req.body.year,
        month: req.body.month,
        memfeeStatus: req.body.memfeeStatus,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }
    await Memberfee.update(
        memberfee, {
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