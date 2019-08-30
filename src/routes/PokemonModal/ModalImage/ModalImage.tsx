import React, { FunctionComponent, memo } from 'react';
import * as SC from './styles';

interface IModalImage {
    imageUrl: string;
    name: string;
}

const ModalImage: FunctionComponent<IModalImage> = ({ imageUrl, name }) => {
    return (
        <SC.ModalImageWrapper>
            <SC.ModalImage src={imageUrl} alt={name} />
        </SC.ModalImageWrapper>
    );
};

export default memo(ModalImage);
