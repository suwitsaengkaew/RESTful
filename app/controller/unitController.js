'user strict';

var UnitTask = require('../model/unitModel');

exports.getUnit = (req, res) => {
    UnitTask.getAllUnit((err, unit) => {
        if (err) res.send(err);
        console.log('res -> ', unit);
        res.send(unit); 
    });
};

exports.createUnit = (req, res, err) => {
    var newUnit = new UnitTask(req.body);
    if (!newUnit.UNIT_NAME) {
        res.status(400).send({ error: err });
    } else {
        UnitTask.creatUnit(newUnit, (err, unit) => {
            if (err) res.send(err);
            res.json(unit);
        });
    }
};

exports.delteUnit = (req, res) => {
    console.log(req.params.unitname);
    UnitTask.delete(req.params.unitname, (err, unit) => {
        if (err) res.send(err);
        res.json({ message: 'Unit was deleted..'});
    });
};