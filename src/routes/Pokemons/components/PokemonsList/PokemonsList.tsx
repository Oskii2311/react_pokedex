import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import React, { useCallback, memo, useEffect } from 'react';
import PokemonCard from './PokemonCard/PokemonCard';
import * as SC from './styles';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';
import usePokemonsApi from 'hooks/usePokemonsApi';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import { Link } from 'react-router-dom';

const PokemonList = () => {
    const { pokemons, isEnd } = usePokemonsContext();
    const { fetchPokemons } = usePokemonsApi();
    const { pagination } = usePokemonsContext();

    const { isInfiniteScrollVisible, setInfiniteScroll } = useInfiniteScroll();

    const fetchPokemonsAndFinishLoading = useCallback(async () => {
        await fetchPokemons(pagination.currentPage);
        setInfiniteScroll(false);
    }, [pagination.currentPage, fetchPokemons, setInfiniteScroll]);

    useEffect(() => {
        if (isInfiniteScrollVisible && !isEnd) {
            fetchPokemonsAndFinishLoading();
        }
    }, [isInfiniteScrollVisible, isEnd]);

    return (
        <SC.PokemonList>
            {pokemons.map(pokemon => {
                return (
                    <Link key={pokemon.id} to={`pokemon/${pokemon.id}`}>
                        <PokemonCard pokemon={pokemon} />
                    </Link>
                );
            })}
            {isInfiniteScrollVisible && !isEnd && <InfiniteScroll />}
            {isEnd && <div>No more data</div>}
        </SC.PokemonList>
    );
};

export default memo(PokemonList);
