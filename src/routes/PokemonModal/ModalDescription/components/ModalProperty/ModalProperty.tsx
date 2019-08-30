import React, { FunctionComponent, memo } from 'react';
import { Label, Value } from './styles';
import poke_icon from 'common/icons/poke_icon.svg';

interface IModalProperty {
    label: string;
    value: string;
}

const ModalProperty: FunctionComponent<IModalProperty> = ({ label, value }) => {
    return (
        <div>
            <Label>{label}:</Label>
            <Value>
                <img
                    src={poke_icon}
                    width="14px"
                    height="14px"
                    alt="poke_icon"
                />
                {value}
            </Value>
        </div>
    );
};

export default memo(ModalProperty);
