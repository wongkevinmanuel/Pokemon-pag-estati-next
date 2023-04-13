import axiosss from 'axios';

//instancia de axioss
const pokeApi = axiosss.create(
    {
        baseURL:'https://pokeapi.co/api/v2'
    }
);

//pokeApi.get('/pokemon?limit=151')
export default pokeApi;