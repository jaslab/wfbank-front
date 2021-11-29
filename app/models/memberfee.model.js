module.exports = (sequelize, Sequelize) => {
    const Memberfee = sequelize.define("memberfee", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        amt1: {
            type: Sequelize.DOUBLE,
        },
        amt2: {
            type: Sequelize.DOUBLE,
        },
        amt3: {
            type: Sequelize.DOUBLE,
        },
        total: {
            type: Sequelize.DOUBLE,
        },
        year: {
            type: Sequelize.INTEGER,
        },
        month: {
            type: Sequelize.INTEGER,
        },
        memfeeStatus: {
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

    return Memberfee;
}