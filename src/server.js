
import 'dotenv/config';
import express from 'express';
import { characterRepository } from './models/character.js';
import { getAllCharactersOnApiServices } from './services/charactersServices.js';
import { characterRouteList } from './routes/characters_routes.js';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';


const app = express();
const port = 3000;


const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "SPS Marvel Api tech test",
      description: "This is a sample server Marvel Characterstore serve using redis as DB",
      contact: {
        name: "Bryan Eliut Hernandez Moran",
        url: "https://bhdzit.github.io/"
      },
      servers: ["localhost:3000"]
    },
  },

  apis: ["./src/routes/characters_routes.js"]
};


const swaggerDocs = swaggerJSDoc(swaggerOptions);



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
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));