
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

    // if form data is empty, reject
    if (req.body.burgerName === '') {
        return res.status(400).end();
    }
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
            req.body.burgerName, false
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
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;