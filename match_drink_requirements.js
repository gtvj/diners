const match_drink_requirements = (drinks_diners_like, restaurants) => {

    return restaurants.filter(restaurant => {

        let good_drink_at_restaurant = restaurant.drinks.filter(drink => {

            return drinks_diners_like.includes(drink);
        });

        return good_drink_at_restaurant.length > 0;
    });
};

module.exports = match_drink_requirements;