'use strict';
module.exports = function(app) {
    var controller = require('../controllers/plantController')

    app.route('/plants')
        .get(controller.get_all_plants)
        .post(controller.create_plant);

    app.route('/plants/:name')
        .get(controller.get_plant)
        .put(controller.update_plant)
        .delete(controller.delete_plant);

}