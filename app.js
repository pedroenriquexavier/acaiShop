const path = require('path');
const express = require('express');

const acaiRouter = require('./routes/acaiRoute');
const viewRouter = require('./routes/viewRoutes');
const userRouter = require('./routes/userRoute');

const app = express();

app.use(express.static(`${__dirname}/public`));

console.log(__dirname) 


app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views'));

app.use(
    express.json({
        limit: '50kb',
    })
)

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})




app.use('/acai', viewRouter);

app.use('/api/v1/acai', acaiRouter);
app.use('/api/v1/user', userRouter);

module.exports = app;
