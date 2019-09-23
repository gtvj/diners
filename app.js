const restaurants = require('./restaurants');
const people = require('./people');
const get_person = require('./get_person');
const get_foods_diners_wont_eat = require('./get_foods_diner_wont_eat');
const match_food_requirements = require('./match_food_requirements');
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
        return match_food_requirements(bad_foods, restaurants);


    });
    
    console.log(get_intersection(places_to_go));
    

});

ask();
