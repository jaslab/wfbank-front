module.exports = (sequelize, Sequelize) => {
    const Ledger = sequelize.define("ledger", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        tranCategory: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tranType: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        tranComment: {
            type: Sequelize.STRING,
            allowNull: true,
        },
        amt: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        createdBy:{
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    })

    return Ledger;
}