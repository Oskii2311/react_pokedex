import styled from 'styled-components';

const ModalContent = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const ModalWrapper = styled.div`
    height: 80vh;
    width: 60vw;
    padding: 20px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px !important;
    overflow-x: auto;
    position: relative;
`;

const CloseButton = styled.button`
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;

    cursor: pointer;
    font-size: 1.4em;
    &:hover {
        background-color: #cc0000;
        color: #fff;
    }
`;

export { ModalContent, ModalWrapper, CloseButton };
