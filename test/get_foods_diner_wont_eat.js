const assert = require('assert');
const get_foods_diner_wont_eat = require('../get_foods_diner_wont_eat');

describe('get_foods_diner_wont_eat', function () {
    describe('get_foods_diner_wont_eat()', function () {

        it('should return the correct array when passed ', function () {

            let diners = {
                "name": "Gary Jones",
                "wont_eat": ["Eggs", "Pasta"],
                "drinks": ["Tequila", "Soft drinks", "beer", "Coffee"]
            };

            assert.deepEqual(get_foods_diner_wont_eat(diners), ["Eggs", "Pasta"]);

        });
    });
});