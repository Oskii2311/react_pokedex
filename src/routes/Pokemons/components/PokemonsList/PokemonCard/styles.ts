import styled, { keyframes } from 'styled-components';

const HoverAnimation = keyframes`
    0% {
        background-color: #fff;
    }
    100% {
        background-color: #CC0000;
        color:#fff
        border: 1px solid transparent;
    }
`;

const UnHoverAnimation = keyframes`
    0% {
        background-color: #CC0000;
        color:#fff
        border: 1px solid transparent;
    }
    100% {
        background-color: #fff;

    }
`;

const PokemonCard = styled.div`
    display: flex;
    width: 450px;
    height: 350px;
    margin: 10px;
    box-sizing: border-box;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    animation: ${UnHoverAnimation} 0.8s;

    :hover {
        animation: ${HoverAnimation} 0.8s;
        animation-fill-mode: forwards;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
`;

const Image = styled.img`
    object-fit: contain;
    width: 100%;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Name = styled.div`
    display: flex;
    align-items: center;
    height: 20%;
    justify-content: center;
    width: 100%;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    height: 80%;
    padding: 10px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-bottom: 0;
`;

export { PokemonCard, Image, ImageWrapper, Description, Name, Text };
