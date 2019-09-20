const get_foods_diners_wont_eat = (diners) => {

    const foods_incl_duplicates = diners.reduce((accumulator, current_value) => accumulator.concat(current_value.wont_eat), []);

    return [... new Set(foods_incl_duplicates)];
};

module.exports = get_foods_diners_wont_eat;