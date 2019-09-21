const get_intersection = (arrays) => {

    return arrays.reduce((accumulator, current_value) => {
        let intersection = new Set([...accumulator].filter(accumulator => current_value.includes(accumulator)));

        return [...intersection];
    });
};

module.exports = get_intersection;