import DotsLoader from 'components/Spinner/Spinner';
import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import React, { memo, useEffect } from 'react';
import PokemonList from './components/PokemonsList/PokemonsList';
import usePokemonsApi from 'hooks/usePokemonsApi';

const Pokemons = () => {
    const { pokemons } = usePokemonsContext();
    const { fetchPokemons } = usePokemonsApi();

    useEffect(() => {
        fetchPokemons(1);
    }, []);

    return <>{pokemons.length > 0 ? <PokemonList /> : <DotsLoader />}</>;
};

export default memo(Pokemons);
