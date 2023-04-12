

const getAllCharactersOnApi = async (req, res = response) => {
    try {
        const response = await getAllCharactersOnApiServices();
        res.send(response);
    } catch (error) {
        console.log(error);
        res.send({ error: "Parece que hubo un error al obtener los datos!" });
    }
}

export {
    getAllCharactersOnApi
}