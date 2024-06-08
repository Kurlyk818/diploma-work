const filterByType = (arr, type) => {
    return arr.filter((item) => item.type === type);
}

const filterOutByString = (array, string) => {
    return [...array].filter(item => !item.alergens.includes(string));
}

const filterByPhrase = (array, phrase) => {
    return [...array].filter((item => item.name.toLowerCase().includes(phrase)));
}

export { filterByType, filterOutByString, filterByPhrase }