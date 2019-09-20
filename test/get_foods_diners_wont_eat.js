const assert = require('assert');
const get_foods_diners_wont_eat = require('../get_foods_diners_wont_eat');

describe('get_foods_diners_wont_eat', function () {
    describe('get_foods_diners_wont_eat()', function () {

        it('should return the correct array when passed ', function () {

            let diners = [{
                "name": "Gary Jones",
                "wont_eat": ["Eggs", "Pasta"],
                "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
            }];

            assert.deepEqual(get_foods_diners_wont_eat(diners), ["Eggs", "Pasta"]);

        });


        it('should return the correct array when passed two diners', function () {

            let diners = [{
                "name": "Gary Jones",
                "wont_eat": ["Eggs", "Pasta"],
                "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
            }, {
                "name": "Alan Allen",
                "wont_eat": ["Meat", "Fish"],
                "drinks": ["Soft drinks", "Tea"]
            }];

            assert.deepEqual(get_foods_diners_wont_eat(diners), ["Eggs", "Pasta", "Meat", "Fish"]);

        });

        it('should return the correct array when one diner has nothing in wont_eat', function () {

            let diners = [{
                "name": "Gary Jones",
                "wont_eat": ["Eggs", "Pasta"],
                "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
            }, {
                "name": "Alan Allen",
                "wont_eat": [],
                "drinks": ["Soft drinks", "Tea"]
            }];

            assert.deepEqual(get_foods_diners_wont_eat(diners), ["Eggs", "Pasta"]);

        });


    });
});