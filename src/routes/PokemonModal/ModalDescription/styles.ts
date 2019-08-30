import styled from 'styled-components';

const ModalDescription = styled.div`
    display: flex;
    justify-content: center;
    > div {
        margin-bottom: 14px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    :first-child {
        margin-right: 20px;
    }
    > div {
        margin-top: 12px;
    }
`;

export { ModalDescription, Column };
