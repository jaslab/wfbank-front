require('dotenv').config();
const db = require('../models');
const Loantransaction = db.loantransaction;

exports.getAll = async (req, res) => {
    await Loantransaction.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Loantransactions are empty');
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

    await Loantransaction.findByPk(id)
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

    const loantransaction = {
        month: req.body.month,
        tranType: req.body.tranType,
        tranComment: req.body.tranComment,
        amt_priciple: req.body.amt_priciple,
        amt_intrest: req.body.amt_intrest,
        tranStatus: req.body.tranStatus,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        accountId: req.body.accountId
    }

    await Loantransaction.create(loantransaction)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the Loantransaction"
            });
        });
};

exports.update = async (req, res) => {
    const loantransaction = {
        month: req.body.month,
        tranType: req.body.tranType,
        tranComment: req.body.tranComment,
        amt_priciple: req.body.amt_priciple,
        amt_intrest: req.body.amt_intrest,
        tranStatus: req.body.tranStatus,
        updatedBy: req.body.updatedBy
    }
    await Loantransaction.update(
        loantransaction, {
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