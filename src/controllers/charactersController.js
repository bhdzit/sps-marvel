import { characterRepository } from "../models/character.js";


const getAllCharacters = async (req, res = response) => {
    try {
        const listOfCharacter = await characterRepository.search().return.all();
        res.send(listOfCharacter);
    } catch (error) {
        console.log(error);
        res.send({ error: "Parece que hubo un error al obtener los datos!" });
    }
}

export {
    getAllCharacters
}