import React from 'react';
import Pokecard from './Pokecard';

function Pokedex(pokemon) {

    return (
        <>
        {pokemon.map(i => <Pokecard
        key={i.id}
        name={i.name}
        img={i.pic}
        type={i.type}
        exp={i.base_experience}
         />)}
        </>
    );
}

export default Pokedex;