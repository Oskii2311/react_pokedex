import React, { FunctionComponent } from 'react';
import * as SC from './styles';

interface IHeader {
    children: React.ReactChild;
}

const Header: FunctionComponent<IHeader> = ({ children }) => {
    return <SC.Header>{children}</SC.Header>;
};

export default Header;
