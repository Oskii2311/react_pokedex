import PokemonsApi from 'apis/PokemonApi/PokemonApi';
import createUseContext from 'constate';
import { useCallback, useReducer } from 'react';
import {
    initialState,
    PokemonsReducer,
    IPokemonsPagination,
} from './PokemonsReducer';
import { IPokemon } from 'common/types/types';
interface IUsePokemons {
    apis: {
        pokemonsApi: PokemonsApi;
    };
}

const usePokemons = (props: IUsePokemons) => {
    const {
        apis: { pokemonsApi },
    } = props;
    const [state, dispatch] = useReducer(PokemonsReducer, initialState);

    const setPokemons = useCallback(
        (pokemons: IPokemon[], pagination: IPokemonsPagination) => {
            dispatch({
                type: 'ADD_POKEMONS_ITEMS_AND_PAGINATION',
                pokemons,
                pagination,
            });
        },
        []
    );

    const setEndOfPokemonList = useCallback((isEnd: boolean) => {
        dispatch({
            type: 'SET_END_OF_POKEMON_LIST',
            isEnd,
        });
    }, []);

    return {
        ...state,
        setPokemons,
        pokemonsApi,
        setEndOfPokemonList,
    };
};

export const usePokemonsContext = createUseContext(usePokemons);
