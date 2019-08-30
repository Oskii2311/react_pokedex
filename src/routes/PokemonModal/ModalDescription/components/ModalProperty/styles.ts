import styled from 'styled-components';

const Label = styled.div`
    font-weight: bold;
`;

const Value = styled.div`
    display: flex;
    padding-top: 6px;
    box-sizing: border-box;

    > :first-child {
        padding-right: 8px;
        padding-left: 8px;
        margin-top: 3px;
    }
`;

export { Label, Value };
