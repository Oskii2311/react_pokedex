import React, { FunctionComponent, memo } from 'react';
import * as SC from './styles';
import InfiniteScroll from 'components/InfiniteScroll/InfiniteScroll';
import useImageLoading from 'hooks/useImageLoading';

interface IModalImage {
    imageUrl: string;
    name: string;
}

const ModalImage: FunctionComponent<IModalImage> = ({ imageUrl, name }) => {
    const { finishImageLoading, isImageLoading } = useImageLoading();

    return (
        <SC.ModalImageWrapper>
            <SC.ModalImage
                src={imageUrl}
                alt={name}
                onLoad={finishImageLoading}
                isImageLoading={isImageLoading}
            />
            {isImageLoading && <InfiniteScroll />}
        </SC.ModalImageWrapper>
    );
};

export default memo(ModalImage);
