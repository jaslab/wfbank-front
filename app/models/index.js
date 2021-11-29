const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
      
        pool: {
          max: dbConfig.pool.max,
          min: dbConfig.pool.min,
          acquire: dbConfig.pool.acquire,
          idle: dbConfig.pool.idle
        }
      }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })

  // Models (tables)
db.user = require("./user.model")(sequelize, Sequelize);
db.account = require("./account.model")(sequelize, Sequelize);
db.loan = require("./loan.model")(sequelize, Sequelize);
db.bank = require("./bank.model")(sequelize, Sequelize);
db.accounttransaction = require("./accounttransaction.model")(sequelize, Sequelize);
db.banktransaction = require("./banktransaction.model")(sequelize, Sequelize);
db.memberfee = require("./memberfee.model")(sequelize, Sequelize);
db.transaction = require("./transaction.model")(sequelize, Sequelize);
db.loantransaction = require("./loantransaction.model")(sequelize, Sequelize);
db.ledger = require("./ledger.model")(sequelize, Sequelize);

//Reltionships
db.account.hasMany(db.loan);
db.loan.belongsTo(db.account);

db.account.hasMany(db.memberfee);
db.memberfee.belongsTo(db.account);

db.account.hasMany(db.transaction);
db.transaction.belongsTo(db.account);

db.account.hasMany(db.accounttransaction);
db.accounttransaction.belongsTo(db.account);

db.loan.hasMany(db.loantransaction);
db.loantransaction.belongsTo(db.loan);

module.exports = db;

