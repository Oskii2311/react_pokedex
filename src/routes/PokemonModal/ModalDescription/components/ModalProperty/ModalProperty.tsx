import React, { FunctionComponent, memo } from 'react';
import { Label, Value } from './styles';

interface IModalProperty {
    label: string;
    value: string;
}

const ModalProperty: FunctionComponent<IModalProperty> = ({ label, value }) => {
    return (
        <div>
            <Label>{label}:</Label> <Value>{value}</Value>
        </div>
    );
};

export default memo(ModalProperty);
