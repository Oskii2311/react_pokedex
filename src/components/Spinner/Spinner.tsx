import React from 'react';
import * as SC from './styles';

const DotsLoader = () => (
    <SC.Loader className="loader" data-testid="loader">
        <SC.Ellipsis>
            <div />
            <div />
            <div />
            <div />
        </SC.Ellipsis>
    </SC.Loader>
);

export default DotsLoader;
