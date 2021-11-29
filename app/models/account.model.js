module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        jobtitle: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        regfee: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        joinDate: {
            type: Sequelize.DATEONLY ,
            allowNull: false,
        },
        exitDate: {
            type: Sequelize.DATEONLY ,
        },
        accStatus: {
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

    return Account;
}