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

const PokemonCard = styled.div<{ isSimilarCard?: boolean }>`
    width: ${props => (props.isSimilarCard ? '200px' : '250px')};
    height: auto;
    min-height: ${props => (props.isSimilarCard ? '150px' : '300px')};
    margin: 10px;
    box-sizing: border-box;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    justify-content: space-between;
    padding: 10px;
    cursor: pointer;
    animation: ${UnHoverAnimation} 0.8s;

    ${props =>
        props.isSimilarCard &&
        ` {
            @media (max-width: 1050px) {
                min-height:auto;
                width:auto;
                ${Description} {
                    display:none
                }
                ${ImageWrapper} {
                    width: 100%;
                    height:auto;
                }
            }
    }`}

    :hover {
        animation: ${HoverAnimation} 0.8s;
        animation-fill-mode: forwards;
    }
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Image = styled.img`
    object-fit: contain;
    width: 60%;
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

const Name = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-content: center;
    width: 100%;
    font-weight: bold;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    height: auto;
    padding: 10px;
    box-sizing: border-box;
    padding-bottom: 0;
    justify-content: center;
`;

export { PokemonCard, Image, ImageWrapper, Description, Name, Text };
