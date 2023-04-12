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

const updateCharacter = async (req, res = response) => {
    try {
        const character = await characterRepository.fetch(req.body.entityId);
        if (character.name == null) res.send({ error: "THIS IS NOT THE CHARACTER YOU'RE LOOKING FOR!" });
        character.entityId = req.body.entityId;
        character.id = req.body.id;
        character.name = req.body.name;
        character.description = req.body.description;
        character.modified = new Date().toISOString();

        await characterRepository.save(character)
        res.send(character);
    } catch (error) {
        console.log(error);
        res.send({ error: 'IT SEEMS THERE WAS AN ERROR GETTING THE DATA!' });
    }
}




export {
    getAllCharacters,
    findCharacter,
    updateCharacter
}