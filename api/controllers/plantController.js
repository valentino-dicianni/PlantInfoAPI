'use strict';

var mongoose = require('mongoose'),
    Plant = mongoose.model('Plants');


exports.get_all_plants = (req, res) => {
    Plant.find({}, (err, plant) => {
        if (err)
            res.send(err);
        res.json(plant);
    })
};

exports.create_plant = (req, res) => {
    var new_plant = new Plant(req.body);
    new_plant.save((err, plant) => {
        if (err)
            res.send(err);
        res.json(plant);
    });
};

exports.get_plant = (req, res) => {
    Plant.findOne({ 'name': req.params.name }, (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });

};

exports.get_recommendation = (req, res) => {
    let disease = req.params.disease;
    //console.log(plant, disease);
    Plant.findOne({ 'name': req.params.name }, (err, task) => {
        if (err)
            res.send(err);
        console.log(task);
        res.json(task.diseases);
    });
};

exports.get_all_plant_type = (req, res) => {
    Plant.distinct("name", (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.update_plant = (req, res) => {

};