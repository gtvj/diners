const match_food_requirements = (foods_diners_wont_eat, restaurants) => {

    return restaurants.filter(restaurant => {

        let good_food_at_restaurant = restaurant.food.filter(food => {
            return !foods_diners_wont_eat.includes(food);
        });

        return good_food_at_restaurant.length > 0;
    });
};

module.exports = match_food_requirements;