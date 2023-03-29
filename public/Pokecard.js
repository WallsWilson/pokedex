import React from 'react';

let pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.`

const Pokecard = ({id, name, type, exp}) => {
    <>
    <h3>{name}</h3>
    <img src={pic} alt={name}/>
    <p>Type:{type}</p>
    <p>EXP:{exp}</p>
    </>

}

export default Pokecard;