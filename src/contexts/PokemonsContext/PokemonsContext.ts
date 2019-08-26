import PokemonsApi from 'apis/PokemonApi/PokemonApi';
import createUseContext from 'constate';
import { useCallback, useReducer } from 'react';
import { initialState, PokemonsReducer } from './PokemonsReducer';
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

    const setPokemons = useCallback((pokemons: any) => {
        dispatch({
            type: 'ADD_POKEMONS',
            pokemons,
        });
    }, []);

    return {
        ...state,
        setPokemons,
        pokemonsApi,
    };
};

export const usePokemonsContext = createUseContext(usePokemons);
