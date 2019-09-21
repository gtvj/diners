const assert = require('assert');
const get_diner_drinks = require('../get_diner_drinks');
const people = require('../people');

describe('get_diner_drinks', function () {

    describe('get_diner_drinks()', function () {

        let diner = {
            "name": "Bobby Robson",
            "wont_eat": ["Mexican"],
            "drinks": ["Vodka", "Gin", "Whisky", "Rum", "Cider", "Beer", "Soft drinks"]
        };

        let expected = ["Vodka", "Gin", "Whisky", "Rum", "Cider", "Beer", "Soft drinks"];

        assert.deepEqual(get_diner_drinks(diner), expected);
    });
});