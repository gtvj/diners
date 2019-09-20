const assert = require('assert');
const get_diners_drinks = require('../get_diners_drinks');
const people = require('../people');

describe('get_diners_drinks', function () {

    describe('get_diners_drinks()', function () {

        let diners = [{
            "name": "Bobby Robson",
            "wont_eat": ["Mexican"],
            "drinks": ["Vodka", "Gin", "Whisky", "Rum", "Cider", "Beer", "Soft drinks"]
        },
            {
                "name": "David Lang",
                "wont_eat": ["Chinese"],
                "drinks": ["Beer", "Cider", "Rum"]
            }];

        let expected = ["Vodka", "Gin", "Whisky", "Rum", "Cider", "Beer", "Soft drinks"];

        assert.deepEqual(get_diners_drinks(diners), expected);
    });
});