import React from 'react';
import * as SC from './styles';

const InfniteScroll = () => (
    <SC.SmallLoader data-testid="loader">
        <SC.RollerLoader>
            <div />
            <div />
            <div />
            <div />
        </SC.RollerLoader>
    </SC.SmallLoader>
);

export default InfniteScroll;
