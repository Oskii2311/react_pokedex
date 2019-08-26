import { IPokemon } from 'common/types/types';
import React, { FunctionComponent, memo } from 'react';
import * as SC from './styles';

const PokemonCard: FunctionComponent<{ pokemon: IPokemon }> = ({
    pokemon: { name, imageUrl, text },
}) => {
    return (
        <SC.PokemonCard>
            <SC.ImageWrapper>
                <SC.Image src={imageUrl} alt={name} />
            </SC.ImageWrapper>
            <SC.Description>
                <SC.Name>{name}</SC.Name>{' '}
                <SC.Text>{text ? text : 'No data...'}</SC.Text>
            </SC.Description>
        </SC.PokemonCard>
    );
};

export default memo(PokemonCard);
