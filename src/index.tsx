import PokemonApi from 'apis/PokemonApi/PokemonApi';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from 'routes/AppRouter';
import { usePokemonsContext } from './contexts/PokemonsContext/PokemonsContext';
import './index.css';

const pokemonsApi = new PokemonApi();

ReactDOM.render(
    <usePokemonsContext.Provider apis={{ pokemonsApi }}>
        <AppRouter />
    </usePokemonsContext.Provider>,
    document.getElementById('root')
);
