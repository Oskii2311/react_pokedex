import React, { FunctionComponent, memo } from 'react';
import { IPokemon } from 'common/types/types';
import PokemonCard from 'routes/Pokemons/components/PokemonsList/PokemonCard/PokemonCard';
import * as SC from './styles';
import { Label } from '../ModalDescription/components/ModalProperty/styles';
import { Link } from 'react-router-dom';

interface IModalSimilarList {
    pokemons: IPokemon[];
}

const ModalSimilarList: FunctionComponent<IModalSimilarList> = ({
    pokemons,
}) => {
    return (
        <SC.ModalSimilarListWrapper>
            <Label>SIMILAR POKEMONS</Label>

            <SC.ModalSimilarList>
                {pokemons.length > 0
                    ? pokemons.map(pokemon => {
                          return (
                              <Link
                                  key={`pokemon-similar-${pokemon.id}`}
                                  to={`${pokemon.id}`}
                                  replace
                              >
                                  <PokemonCard
                                      isSimilarCard
                                      pokemon={pokemon}
                                      key={`pokemon-similar-${pokemon.id}`}
                                  />
                              </Link>
                          );
                      })
                    : 'no similar cards !'}
            </SC.ModalSimilarList>
        </SC.ModalSimilarListWrapper>
    );
};

export default memo(ModalSimilarList);
