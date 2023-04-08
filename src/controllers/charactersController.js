
require('dotenv').config();

const getAllCharactersOnApi = async (req, res = response) => {
    try {
        res.send({ msg: "Marvel Api" });
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getAllCharactersOnApi
}