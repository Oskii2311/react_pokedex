import React from 'react';
import * as SC from './styles';

const InfiniteScroll = () => (
    <SC.SmallLoader data-testid="loader">
        <SC.RollerLoader>
            <div />
            <div />
            <div />
            <div />
        </SC.RollerLoader>
    </SC.SmallLoader>
);

export default InfiniteScroll;
