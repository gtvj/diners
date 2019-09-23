const assert = require('assert');
const match_drink_requirements = require('../match_drink_requirements');
const restaurants = require('../restaurants');

describe('get_restaurants_that_meet_food_needs', function () {
    describe('match_food_requirements()', function () {
        it('should return an object the correct restaurants', function () {

            let restaurant_results = [{
                "name": "Bland town",
                "food": ["Gruel"],
                "drinks": ["Water"]
            }];

            assert.deepEqual(match_drink_requirements(["Water"], restaurants).length, restaurant_results.length);

        });
    });
});