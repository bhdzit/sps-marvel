import axios from 'axios';
import {config} from "../config/config.js";

const getAllCharactersOnApiServices = async () => {
    const listOfCharacters = [];
    console.log("GETTING LIST OFFSET 0");
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters',
    {params:config}
    );

    const { total } = response.data.data;
    console.log("TOTAL OF CHARACTERS "+total);
    let offset = 1;
    listOfCharacters.push(...response.data.data.results);
    while (listOfCharacters.length < total) {
        listOfCharacters.push(...await getOffsetCharactersList(offset++));
    }

    return listOfCharacters;
}

const getOffsetCharactersList = async (offset) => {
    console.log(`GETTING LIST OFFSET ${offset}`);
    const response = await axios.get('https://gateway.marvel.com/v1/public/characters',
        {
            params: { ...config, offset: offset }
        });
    return response.data.data.results;
}

export { getAllCharactersOnApiServices };
