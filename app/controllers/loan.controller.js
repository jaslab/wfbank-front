require('dotenv').config();
const db = require('../models');
const Loan = db.loan;

exports.getAll = async (req, res) => {
    await Loan.findAll()
        .then(data => {
            console.log(data.length)
            if (data.length != 0) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Loans are empty');
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

    await Loan.findByPk(id)
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
    const loan = {
        loanDate: req.body.loanDate,
        loanTitle: req.body.loanTitle,
        loanAmount: req.body.loanAmount,
        rate: req.body.rate,
        penaltyRate: req.body.penaltyRate,
        periods: req.body.periods,
        monthlyInstallment: req.body.monthlyInstallment,
        loanComment: req.body.loanComment,
        loanState: req.body.loanState,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        accountId :req.body.accountId 
    }

    await Loan.create(loan)
        .then(data => {
            res.status(200).send({
                status: true,
                message: 'Success'
            });
        })
        .catch(err => {
            res.status(500).send({
                status: false,
                message: err.message || "Error occurs creating the Loan"
            });
        });
};

exports.update = async (req, res) => {
    const loan = {
        loanDate: req.body.loanDate,
        loanTitle: req.body.loanTitle,
        loanAmount: req.body.loanAmount,
        rate: req.body.rate,
        penaltyRate: req.body.penaltyRate,
        periods: req.body.periods,
        monthlyInstallment: req.body.monthlyInstallment,
        loanComment: req.body.loanComment,
        loanState: req.body.loanState,
        updatedBy: req.body.updatedBy
    }
    await Loan.update(
        loan, {
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