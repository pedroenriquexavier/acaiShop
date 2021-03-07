
const port =  3000;

const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connection successul!');
});

const db = mongoose.connection;
 

const server = app.listen(port, () => {
    console.log(`App running on port ${port}`);
})