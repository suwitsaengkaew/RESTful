const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 4000;
// const router = express.Router();

const db = require('./db');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// app.get('/pr/getpr_stunit', (req, res, next) => {
//     // var sql = 'SELECT PR_TYPE, PR_PLANT, PR_PROFIT_AREA, PR_NUMBER, PR_BUSINESS_AREA, PR_INVNUMBER, PR_DATE, PR_ITEM_DETAIL, PR_UNIT_PRICE, PR_QTY, PR_UNIT_NAME, PR_AMOUNT_PRICE,  PR_SUPPLIER_NAME, PR_CURRENCY, PR_DUE_DATE, PR_REMARK, PR_REQUEST_BY FROM  ITDB.PR_Record';
//     var sql = 'SELECT UNIT_NAME FROM  ITDB.PR_STUNIT';
//     db.query(sql, (error, results, fields) => {
//     // db.query('SELECT UNIT_NAME FROM  ITDB.PR_STUNIT', (error, results, fields) => {
//         if (error) {
//             res.json(error);
//         } else {
//             res.json(results);
//         }
//     });
// });

app.listen(port, () => {
    var date = new Date();
    console.log('Server start ' + port + ', start on ' + date);
});

var routes = require('./app/routes/approutes');
routes(app);
