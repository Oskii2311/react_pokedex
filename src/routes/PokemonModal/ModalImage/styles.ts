import styled from 'styled-components';

const ModalImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 300px;
    margin-right: 80px;
    min-width: 200px;
    @media (max-width: 768px) {
        width: 120px;
        margin-right: 0;
        margin-bottom: 40px;
    }
`;

const ModalImage = styled.img`
    object-fit: contain;
    width: 100%;
`;

export { ModalImageWrapper, ModalImage };