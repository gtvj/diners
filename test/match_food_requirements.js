const assert = require('assert');
const match_food_requirements = require('../match_food_requirements');
const restaurants = require('../restaurants');

describe('get_restaurants_that_meet_food_needs', function () {
    describe('match_food_requirements()', function () {
        it('should return an object the correct restaurants', function () {

            let foods_diner_wont_eat = ["Mexican", "Chinese"];

            let restaurant_results = [
                {
                    "name": "Spice of life",
                    "food": ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
                    "drinks": ["Vokda", "Gin", "whisky", "Rum", "Cider", "Beer", "Soft drinks"]
                },
                {
                    "name": "The Cambridge",
                    "food": ["Eggs", "Meat", "Fish", "Pasta", "Dairy"],
                    "drinks": ["Vokda", "Gin", "Cider", "Beer", "Soft drinks"]
                },
                {
                    "name": "Wagamama",
                    "food": ["Japanese"],
                    "drinks": ["Beer", "Cider", "Soft Drinks", "Sake"]
                },
                {
                    "name": "Sultan Sofrasi",
                    "food": ["Meat", "Bread", "Fish"],
                    "drinks": ["Beer", "Cider", "Soft Drinks"]
                },
                {
                    "name": "Spirit House",
                    "food": ["Nuts", "Cheese", "Fruit"],
                    "drinks": ["Vodka", "Gin", "Rum", "Tequila"]
                },
                {
                    "name": "Tally Joe",
                    "food": ["Fish", "Meat", "Salad", "Deserts"],
                    "drinks": ["Beer", "Cider", "Soft Drinks", "Sake"]
                },
                {
                    "name": "Fabrique",
                    "food": ["Bread", "Cheese", "Deli"],
                    "drinks": ["Soft Drinks", "Tea", "Coffee"]
                }
            ];


            assert.deepEqual(match_food_requirements(foods_diner_wont_eat, restaurants), restaurant_results);

        });
    });
});