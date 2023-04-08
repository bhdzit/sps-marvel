const express = require('express');
require('dotenv').config();
const app = express()
const port = 3000

app.use("/api/characters", require('./routes/characters_routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})