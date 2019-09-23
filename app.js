const restaurants = require('./restaurants');
const people = require('./people');
const get_person = require('./get_person');
const get_foods_diners_wont_eat = require('./get_foods_diner_wont_eat');
const get_diner_drinks = require('./get_diner_drinks');
const match_food_requirements = require('./match_food_requirements');
const match_drink_requirements = require('./match_drink_requirements');
const get_intersection = require('./get_intersection');
const print_response = require('./print_response');

const answers = [];

function ask() {
    process.stdout.write(`Tell me a diner's name or leave empty to finish > `);
}

process.stdin.on('data', data => {

    const answer = data.toString().trim();

    if (answer === '') {
        process.exit();
    } else {
        answers.push(answer);
        ask();
    }
});

process.on('exit', () => {

    const diners = answers
        .map(i => get_person(i, people))
        .filter(i => !!i);

    const places_to_go = diners.map(i => {

        const bad_foods = get_foods_diners_wont_eat(i);

        let good_restaurants_for_food = match_food_requirements(bad_foods, restaurants);

        const good_drinks = get_diner_drinks(i);

        let good_restaurants_for_drink = match_drink_requirements(good_drinks, restaurants);

        let intersection = get_intersection([good_restaurants_for_drink, good_restaurants_for_food]);

        return intersection;
    });

    console.log(get_intersection(places_to_go));
});

ask();
