import { IPokemon } from 'common/types/types';

export interface IPokemonsPagination {
    currentPage: number;
    size: number;
}

export interface IInitialState {
    pokemons: IPokemon[];
    pagination: IPokemonsPagination;
    isEnd: boolean;
}

export const initialState: IInitialState = {
    pokemons: [],
    pagination: {
        currentPage: 0,
        size: 20,
    },
    isEnd: false,
};

export type PokemonActions =
    | {
          type: 'ADD_POKEMONS_ITEMS_AND_PAGINATION';
          pokemons: IPokemon[];
          pagination: IPokemonsPagination;
      }
    | { type: 'SET_END_OF_POKEMON_LIST'; isEnd: boolean };

export const PokemonsReducer = (
    state: IInitialState,
    action: PokemonActions
) => {
    switch (action.type) {
        case 'ADD_POKEMONS_ITEMS_AND_PAGINATION': {
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.pokemons],
                pagination: {
                    currentPage: action.pagination.currentPage + 1,
                    size: action.pagination.size,
                },
            };
        }
        case 'SET_END_OF_POKEMON_LIST': {
            return { ...state, isEnd: action.isEnd };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};
