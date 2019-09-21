const assert = require('assert');
const get_intersection = require('../get_intersection');


describe('get_intersection', function () {
    describe('get_intersection()', function () {

        it('should return the intersection', function () {

            let arrays = [
                ["Red", "Green", "Blue"],
                ["Red", "Yellow", "Pink"]
            ];

            assert.deepEqual(get_intersection(arrays), ["Red"]);

        });
    });
});