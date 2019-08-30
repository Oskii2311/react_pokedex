import { render, waitForElement } from '@testing-library/react';
import Pokemons from './Pokemons';
import React from 'react';
import { usePokemonsContext } from 'contexts/PokemonsContext/PokemonsContext';
import PokemonsApi from 'common/__MOCKS__/PokemonApi';

describe('Pokemons', () => {
    test('Should show loader before fetched data', () => {
        const { getByTestId } = render(
            <usePokemonsContext.Provider
                apis={{ pokemonsApi: new PokemonsApi() as any }}
            >
                <Pokemons />
            </usePokemonsContext.Provider>
        );

        expect(getByTestId('loader')).toBeTruthy();
    });

    test('should fetch pokemons', () => {
        const api = new PokemonsApi() as any;
        const getPokemons = jest.spyOn(api, 'getPokemons');

        render(
            <usePokemonsContext.Provider apis={{ pokemonsApi: api }}>
                <Pokemons />
            </usePokemonsContext.Provider>
        );

        expect(getPokemons).toHaveBeenCalledTimes(1);
    });
});
