import { IPokemon } from 'common/types/types';
import React, { FunctionComponent, memo } from 'react';
import * as SC from './styles';
import useImageLoading from 'hooks/useImageLoading';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';

const PokemonCard: FunctionComponent<{
    pokemon: IPokemon;
    isSimilarCard?: boolean;
}> = ({ pokemon: { name, imageUrl, supertype }, isSimilarCard }) => {
    const { finishImageLoading, isImageLoading } = useImageLoading();

    return (
        <SC.PokemonCard isSimilarCard={isSimilarCard}>
            <SC.ImageWrapper>
                <SC.Image
                    src={imageUrl}
                    alt={name}
                    onLoad={finishImageLoading}
                    isImageLoading={isImageLoading}
                />
                {isImageLoading && <InfiniteScroll />}
            </SC.ImageWrapper>
            <SC.Description>
                <SC.Name>{name}</SC.Name>
                <SC.Text>{supertype ? supertype : 'No data...'}</SC.Text>
            </SC.Description>
        </SC.PokemonCard>
    );
};

export default memo(PokemonCard);
