'user strict';

var sql = require('../../db');

var Task = function (unit) {
    this.UNIT_NAME = unit.UNIT_NAME;
    // this.status = task.status;
    // this.created_at = new Date();
};

Task.createTask = function createUser(newTask, result) {
    sql.query('INSERT INTO PR_STUNIT set ?', newTask, (err,res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Task.getTaskByid = function createUser(taskId, result) {
    sql.query('SELECT UNIT_NAME FROM  ITDB.PR_STUNIT WHERE id = ? ', taskId, (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Task.getAllTask = function getAllTask(result) {
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

Task.updateById = (id, task, result) => {
    sql.query('UPDATE ITDB.PR_STUNIT set UNIT_NAME = ? where id = ? ', [task.task, id], (err, res) => {
        if (err) {
            console.log('error : ', err);
            result(null, err);
        } else {
            console.log('tasks : ',res);
            result(null, res);
        }
    });
};

Task.remove = (id, result) => {
    sql.query('DELETE FROM ITDB.PR_STUNIT WHERE id = ?', [id], (err,res) => {
        if (err) {
            console.log('error : ', err);
            result(null, err);
        } else {
            console.log('tasks : ',res);
            result(null, res);
        }
    });
};

module.exports = Task;