import { useCallback } from 'react';
import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import HPService from 'apis/PokemonApi/services/HPService';

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
        async (
            types: string[] | undefined,
            rarity: string | undefined,
            hp: string | undefined,
            subtype: string,
            superType: string
        ) => {
            try {
                let res;
                if (types && rarity && hp) {
                    const HP = HPService.getSimilarPokemonsHPRange(hp);
                    res = await pokemonsApi.getSimilarByHp(
                        types,
                        rarity,
                        HP.min
                    );
                    const {
                        data: { cards },
                    } = res;
                    return cards.filter(
                        card => card.hp && parseInt(card.hp) < HP.max
                    );
                }
                res = await pokemonsApi.getSimilarBySubTypes(
                    subtype,
                    superType
                );
                const {
                    data: { cards },
                } = res;

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
