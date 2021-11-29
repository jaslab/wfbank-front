require('dotenv').config();
const db = require('../models');
const Banktransaction = db.banktransaction;

exports.getAll = async (req, res) => {
    await Banktransaction.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Banktransactions are empty');
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

    await Banktransaction.findByPk(id)
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

    const banktransaction = {
        tranType: req.body.tranType,
        tranComment: req.body.tranComment,
        amt: req.body.amt,
        tranStatus: req.body.tranStatus,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy
    }

    await Banktransaction.create(banktransaction)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the Banktransaction"
            });
        });
};

exports.update = async (req, res) => {
    const banktransaction = {
        tranType: req.body.tranType,
        tranComment: req.body.tranComment,
        amt: req.body.amt,
        tranStatus: req.body.tranStatus,
        updatedBy: req.body.updatedBy
    }
    await Banktransaction.update(
        banktransaction, {
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