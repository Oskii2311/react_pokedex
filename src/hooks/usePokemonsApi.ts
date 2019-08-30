import { useCallback } from 'react';
import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';

const usePokemonsApi = () => {
    const {
        setPokemons,
        pokemonsApi,
        pagination,
        setEndOfPokemonList,
    } = usePokemonsContext();

    const fetchPokemons = useCallback(
        async (pageNumber: number, size: number = 20) => {
            try {
                const {
                    data: { cards },
                } = await pokemonsApi.getPokemons(pageNumber, size);
                if (cards.length === 0) {
                    setEndOfPokemonList(true);
                }
                setPokemons(cards, { currentPage: pageNumber, size });
            } catch (err) {
                setPokemons([], pagination);
            }
        },
        [pokemonsApi, setPokemons, pagination, setEndOfPokemonList]
    );

    const fetchSimilarPokemons = useCallback(
        async (subtype: string, superType: string) => {
            try {
                const {
                    data: { cards },
                } = await pokemonsApi.getSimilarPokemons(subtype, superType);

                return cards;
            } catch (err) {
                return [];
            }
        },
        [pokemonsApi]
    );

    const getPokemon = useCallback(
        async (id: string) => {
            try {
                const {
                    data: { cards },
                } = await pokemonsApi.getPokemon(id);
                return cards[0];
            } catch (err) {
                return null;
            }
        },
        [pokemonsApi]
    );

    return {
        fetchPokemons,
        fetchSimilarPokemons,
        getPokemon,
    };
};

export default usePokemonsApi;
