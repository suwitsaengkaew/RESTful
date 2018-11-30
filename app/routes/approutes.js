'use strict';
module.exports = (app) => {
    var todoList = require('../controller/appController');
    var unitCtrl = require('../controller/unitController');

    app.route('/tasks')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

    app.route('/unitstd')
    .get(unitCtrl.getUnit)
    .post(unitCtrl.createUnit);

    app.route('/unitstd/:unitname')
    .delete(unitCtrl.delteUnit);
};
