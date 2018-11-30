'user strict';

var sql = require('../../db');

var UnitTask = function (unit) {
    this.UNIT_NAME = unit.UNIT_NAME;
}

UnitTask.creatUnit = function createUnit(newUnit, result) {
    sql.query('INSERT INTO ITDB.PR_STUNIT set ?', newUnit, (err,res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

UnitTask.getAllUnit = function getAllUnit(result) {
    sql.query('SELECT UNIT_NAME FROM  ITDB.PR_STUNIT', (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(null, err);
        } else {
            console.log('tasks : ',res);
            result(null, res);
        }
    });
};

UnitTask.delete = function(unit, result) {
    console.log(unit);
    sql.query('DELETE FROM ITDB.PR_STUNIT WHERE UNIT_NAME  = ?', [unit], (err,res) => {
        if (err) {
            console.log('error : ', err);
            result(null, err);
        } else {

            console.log('tasks : ',res);
            result(null, res);
        }
    });
};

module.exports = UnitTask;