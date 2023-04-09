const axios = require('axios');
const config = require("../config/config");
const getAllCharactersOnApiServices = async (params) => {
    const listOfCharacters = [];
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters',
        config
    );
    const { total } = response.data.data;
    let offset = 1;
    listOfCharacters.push(...response.data.data.results);
    while (listOfCharacters.length < total) {
        listOfCharacters.push(...await getOffsetCharactersList(offset++));
    }

    return listOfCharacters;
}

const getOffsetCharactersList = async (offset) => {
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters',
        {
            params: { ...config.params, offset: offset }
        });
    return response.data.data.results;
}

module.exports = {
    getAllCharactersOnApiServices
}
