import React, { FunctionComponent, memo } from 'react';
import { Label, Value } from '../ModalProperty/styles';
import poke_icon from 'common/icons/poke_icon.svg';

interface IModalDetails {
    text: string[];
}

const ModalDetails: FunctionComponent<IModalDetails> = ({ text }) => {
    return (
        <div>
            <Label>Details: </Label>
            <Value>
                <img
                    src={poke_icon}
                    width="14px"
                    height="14px"
                    alt="poke_icon"
                />
                {text ? text : 'sorry, no data about this card ...'}
            </Value>
        </div>
    );
};

export default memo(ModalDetails);
