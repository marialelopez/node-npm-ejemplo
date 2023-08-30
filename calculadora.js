// const op = require ("./operaciones")
import fetch from 'node-fetch'

fetch ("https://pokeapi.co/api/v2/pokemon/ditto")
.then ((response)=> response.json())
.then((data)=>{
    console.log(data.forms);
})
.catch ((err) => console.log(err));