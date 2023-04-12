
import 'dotenv/config';
import express from 'express';
import { characterRepository } from './models/character.js';
import { getAllCharactersOnApiServices } from './services/charactersServices.js';
import {characterRouteList} from './routes/characters_routes.js';


const app = express()
const port = 3000
app.use(express.json());
app.use("/api/characters", characterRouteList);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
  const listOfCharacter = await characterRepository.search().return.all();

  if (listOfCharacter == 0) {
    console.log("GETTING ALL CHARACTERS");
    try {
      const characters = await getAllCharactersOnApiServices();
      console.log("SAVING ON REALS");
      characters.map(async (character) => {
        console.log("SAVING CHARACTER");
        const savedCharacter = await characterRepository.createAndSave(character);
        console.log("CHARACTER WAS SAVED SUCCESSFULLY");
      });
    } catch (error) {
      console.log(error);
    }

  }
  else {
    console.log("LIST OF CHARACTERS HAS ALREADY LOADED");
  }


});