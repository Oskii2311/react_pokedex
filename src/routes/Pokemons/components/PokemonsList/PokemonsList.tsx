import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import React from 'react';
import PokemonCard from './PokemonCard/PokemonCard';
import * as SC from './styles';

const PokemonList = () => {
    const { pokemons } = usePokemonsContext();
    return (
        <SC.PokemonList>
            {pokemons.map(pokemon => {
                return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
            })}
        </SC.PokemonList>
    );
};

export default PokemonList;
