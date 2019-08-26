
var express = require('express');
var router = express.Router();

// import the burgers.js to use db functions for burgers
var burger = require('../models/burger.js');

// get all burgers from db
router.get('/', (req, res) => {
    console.log('\nGET /');

    burger.selectAll((data) => {
        var burgersObject = {
            burgers: data
        };
        res.render('index', burgersObject);
    });
});

// add burger with default condition of devoured = false
router.post('/burgers', (req, res) => {
    console.log('\nPOST /burgers');

    burger.insertOne([
        'burger_name', 'devoured'
    ], [
            req.body.burger_name, false
        ], (data) => {
            res.redirect('/');
        });
});

// update burger devoured state
router.put('/burgers/:id', (req, res) => {
    var id = req.params.id;
    console.log(`\nPUT /burgers/:${id}`);

    burger.updateOne('devoured', true, id, (data) => {
        if (data.changedRows == 0) {
            // if no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;