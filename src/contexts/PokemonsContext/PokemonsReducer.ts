import { IPokemon } from 'common/types/types';

export interface IInitialState {
    pokemons: IPokemon[];
}

export const initialState: IInitialState = {
    pokemons: [],
};

export type PokemonActions = {
    type: 'ADD_POKEMONS';
    pokemons: IPokemon[];
};

export const PokemonsReducer = (
    state: IInitialState,
    action: PokemonActions
) => {
    switch (action.type) {
        case 'ADD_POKEMONS': {
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.pokemons],
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
