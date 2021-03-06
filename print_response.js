const print_response = (answers, diner, bad_foods, restaurants) => {

    console.log(`You said ${answers.join(', ')} would be coming to dinner`);

    let diner_names = diner.map(i => i.name);

    console.log(`We searched our database and found ${diner_names.join(', ')}`);
    console.log(`This diner needs restaurants that can accommodate people who don't like these foods: ${bad_foods.join(`, `)}`);

    let restaurant_names = restaurants.map(i => i.name);

    console.log(`These restaurants are: ${restaurant_names.join(', ')}`);

};

module.exports = print_response;