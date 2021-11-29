module.exports = (sequelize, Sequelize) => {
    const Loan = sequelize.define("loan", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        loanDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
        },
        loanTitle: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        loanAmount: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        rate: {
            type: Sequelize.DOUBLE ,
        },
        penaltyRate: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        periods: {
            type: Sequelize.INTEGER,
            allowNull: false,
            default:true,
        },
        monthlyInstallment: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            default:true,
        },
        monthlyInstallmentDate: {
            type: Sequelize.DATEONLY,
            allowNull: false,
            default:true,
        },
        loanComment: {
            type: Sequelize.STRING,
            allowNull: false,
            default:true,
        },
        loanState: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            default:true,
        },
        createdBy:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        updatedBy:{
            type: Sequelize.INTEGER,
            allowNull: false,
        }
    })

    return Loan;
}