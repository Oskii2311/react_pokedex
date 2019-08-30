import styled from 'styled-components';

const ModalSimilarList = styled.div`
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const ModalSimilarListWrapper = styled.div`
    margin-top: 20px;
`;

export { ModalSimilarList, ModalSimilarListWrapper };
