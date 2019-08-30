import React, { FunctionComponent, memo } from 'react';
import { Label, Value } from '../ModalProperty/styles';

interface IModalDetails {
    text: string[];
}

const ModalDetails: FunctionComponent<IModalDetails> = ({ text }) => {
    return (
        <div>
            <Label>Details: </Label>
            <Value>{text ? text : 'sorry, no data about this card ...'}</Value>
        </div>
    );
};

export default memo(ModalDetails);
