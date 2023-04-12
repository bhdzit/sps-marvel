import { characterRepository } from "../models/character.js";


const getAllCharacters = async (req, res = response) => {
    try {
        const listOfCharacter = await characterRepository.search().return.all();
        res.send(listOfCharacter);
    } catch (error) {
        console.log(error);
        res.send({ error: 'IT SEEMS THERE WAS AN ERROR GETTING THE DATA!' });
    }
}

const findCharacter = async (req, res = response) => {
    try {
        const character = await characterRepository.fetch(req.params.id);
        if (character.name == null) res.send({ error: "THIS IS NOT THE CHARACTER YOU'RE LOOKING FOR!" });
        res.send(character);
    } catch (error) {
        console.log(error);
        res.send({ error: 'IT SEEMS THERE WAS AN ERROR GETTING THE DATA!' });
    }
}



export {
    getAllCharacters,
    findCharacter
}