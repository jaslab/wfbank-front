const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const db = require("./app/models");
const userRoutes = require('./app/routes/user.route');
const authRoutes = require('./app/routes/auth.route');
const accountRoutes = require('./app/routes/account.route');
const loanRoutes = require('./app/routes/loan.route');
const accounttransactionRoutes = require('./app/routes/accounttransaction.route');
const loantransactionRoutes = require('./app/routes/loantransaction.route');
const {veryfyToken} = require('./app/middlewares/auth.middleware')

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

db.sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`);
    });

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/account', accountRoutes);
app.use('/loan', loanRoutes);
app.use('/acctran', accounttransactionRoutes);
app.use('/loantran', loantransactionRoutes);

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});