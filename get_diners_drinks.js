const get_diners_drinks = (diners) => {
    const drinks_incl_duplicates = diners.reduce((accumulator, current_value) => accumulator.concat(current_value.drinks), []);

    return [... new Set(drinks_incl_duplicates)];
};

module.exports = get_diners_drinks;