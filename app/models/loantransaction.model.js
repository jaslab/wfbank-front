module.exports = (sequelize, Sequelize) => {
    const Loantransaction = sequelize.define("loantransaction", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },
        month:{
            type: Sequelize.INTEGER,
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
        amt_priciple: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        amt_intrest: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        amt: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        tranStatus: {
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

    return Loantransaction;
}