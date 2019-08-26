import Header from 'components/Header/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Pokemons from './Pokemons/Pokemons';
import * as SC from './styles';

function AppRouter() {
    return (
        <Router>
            <Header>NeoPOKEDEX</Header>
            <SC.Main>
                <Switch>
                    <Route path="/" exact component={Pokemons} />
                </Switch>
            </SC.Main>
        </Router>
    );
}

export default AppRouter;
