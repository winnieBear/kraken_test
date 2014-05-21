'use strict';


var IndexModel = require('../models/index');


module.exports = function (app) {

    var model = new IndexModel();


    app.get('/', function (req, res) {

        var data = {
        	name: 'test',
        	//views: 'this is test string!',
        	//settings: 'this is the data from models',
        	//ext:'but it will not ok!'
        };
        //res.render('index', model);
        res.render('index', data);
        
    });

};
