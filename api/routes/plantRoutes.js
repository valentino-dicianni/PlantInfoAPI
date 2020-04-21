'use strict';
module.exports = function(app) {
    var controller = require('../controllers/plantController')

    app.route('/plants')
        .get(controller.get_all_plants)
        .post(controller.create_plant);

    app.route('/get_types')
        .get(controller.get_all_plant_type);

    app.route('/plants/:name')
        .get(controller.get_plant)
        .put(controller.update_plant)

    app.route('/plants/:name/:disease')
        .get(controller.get_recommendation)


}