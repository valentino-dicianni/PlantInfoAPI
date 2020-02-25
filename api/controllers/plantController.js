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

exports.get_all_plant_type = (req, res) => {
    Plant.distinct("name", (err, task) => {
        if (err)
            res.send(err);
        res.json(task);
    });
}

exports.update_plant = (req, res) => {

};

exports.get_response_cnn = (req, res) => {
    wait(2000);
    res.json({
        "plantID": "1213",
        "ill": true,
        "disease": "enterococcus plantalis"
    });

};

function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}