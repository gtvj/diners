const assert = require('assert');
const get_person = require('../get_person');
const people = require('../people');

describe('get_person', function () {
    describe('get_person()', function () {

        it('should return an object when called with "Gary Jones"', function () {

            let obj = {
                "name": "Gary Jones",
                "wont_eat": ["Eggs", "Pasta"],
                "drinks": ["Tequila", "Soft drinks", "Beer", "Coffee"]
            };

            assert.deepEqual(get_person("Gary Jones", people), obj);

        });

        it('should return an object when called with "David Lang"', function () {

            let obj = {
                "name": "David Lang",
                "wont_eat": ["Chinese"],
                "drinks": ["Beer", "Cider", "Rum"]
            };

            assert.deepEqual(get_person("David Lang", people), obj);

        });

        it('should return false when called with "Jakey Fakey"', function () {

            assert.equal(get_person("Jakey Fakey", people), false);

        });
    });
});