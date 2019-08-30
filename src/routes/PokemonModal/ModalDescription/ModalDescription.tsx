import React, { FunctionComponent, memo } from 'react';
import ModalProperty from './components/ModalProperty/ModalProperty';
import * as SC from './styles';

import ModalDetails from './components/ModalDetails/ModalDetails';

interface IModalDescription {
    name: string;
    superType: string;
    id: string;
    series: string;
    details: string[];
    rarity: string;
}

const ModalDescription: FunctionComponent<IModalDescription> = ({
    name,
    superType,
    id,
    series,
    details,
    rarity,
}) => {
    return (
        <SC.ModalDescription>
            <ModalProperty label="Name" value={name}></ModalProperty>
            <ModalProperty label="Super Type" value={superType}></ModalProperty>
            <ModalProperty label="Id" value={id}></ModalProperty>
            <ModalProperty label="Series" value={series}></ModalProperty>
            <ModalProperty label="Rarity" value={rarity}></ModalProperty>
            <ModalDetails text={details} />
        </SC.ModalDescription>
    );
};

export default memo(ModalDescription);
