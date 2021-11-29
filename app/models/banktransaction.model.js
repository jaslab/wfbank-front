module.exports = (sequelize, Sequelize) => {
    const Banktransaction = sequelize.define("banktransaction", {
        id: {
            type: Sequelize.BIGINT,
            allowNull: false,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
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

    return Banktransaction;
}