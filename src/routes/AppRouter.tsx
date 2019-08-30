import Header from 'components/Header/Header';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokemons from './Pokemons/Pokemons';
import * as SC from './styles';
import PokemonModal from './PokemonModal/PokemonModal';
import { ModalContainer, ModalRoute } from 'react-router-modal';

function AppRouter() {
    return (
        <Router>
            <Header>NeoPOKEDEX</Header>
            <SC.Main>
                <ModalRoute component={PokemonModal} path="/pokemon/:id" />

                <Route path="/" component={Pokemons} />
                <ModalContainer />
            </SC.Main>
        </Router>
    );
}

export default AppRouter;
