const get_person = (name, people) => {

    const found_people = people.filter(item => {
        return item["name"] === name;
    });

    if (Array.isArray(found_people) && found_people.length === 1) {
        return found_people[0];
    }

    return false
};

module.exports = get_person;