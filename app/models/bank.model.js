module.exports = (sequelize, Sequelize) => {
    const Bank = sequelize.define("bank", {
        id: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        accountType: {
            type: Sequelize.STRING,
            allowNull: false,
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

    return Bank;
}