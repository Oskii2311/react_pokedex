import DotsLoader from 'components/Spinner/Spinner';
import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import React, { memo, useCallback, useEffect } from 'react';
import PokemonList from './components/PokemonsList/PokemonsList';

const Pokemons = () => {
    const { pokemons, pokemonsApi, setPokemons } = usePokemonsContext();

    const fetchPokemons = useCallback(
        async (pageNumber: number, size: number) => {
            try {
                const cards = await pokemonsApi.getPokemons(pageNumber, size);
                setPokemons(cards);
            } catch (err) {
                setPokemons([]);
            }
        },
        [pokemonsApi, setPokemons]
    );

    useEffect(() => {
        fetchPokemons(0, 20);
    }, []);

    return <>{pokemons.length > 0 ? <PokemonList /> : <DotsLoader />}</>;
};

export default memo(Pokemons);
