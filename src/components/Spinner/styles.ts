import styled, { keyframes } from 'styled-components';

const MAIN_LOADER_COLOR = ' #2175D9';
const SECOND_LOADER_COLOR = ' #0F1941';

const Ellipsis1 = keyframes`
    0% {
        transform: scale(0);
        background-color: ${SECOND_LOADER_COLOR};
    }
    100% {
        transform: scale(1);
        background-color: ${MAIN_LOADER_COLOR};
    }
`;
const Ellipsis2 = keyframes`
    0% {
        transform: translate(0, 0);
    }
    100% {
        transform: translate(19px, 0);
    }
`;
const Ellipsis3 = keyframes`
    0% {
        transform: translate(0, 0);
        background-color: ${MAIN_LOADER_COLOR};
    }
    100% {
        transform: translate(19px, 0);
        background-color: ${SECOND_LOADER_COLOR};
    }
`;
const Ellipsis4 = keyframes`
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(0);
        background-color: ${SECOND_LOADER_COLOR}
    }
`;

const RollerKeyframes = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }`;

const Loader = styled.div`
    position: fixed;
    width: 100vw;
    padding: 0;
    height: calc(100vh - 64px);
    top: 0;
    left: 0;
    display: flex;
    background-color: rgba(247, 245, 240, 0.75);
    margin-top: 64px;
    z-index: 9999;
`;

const Ellipsis = styled.div`
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
    align-self: center;
    justify-self: center;
    margin: 0 auto;
    div {
        position: absolute;
        top: 27px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #2175d9;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    div:nth-child(1) {
        left: 6px;
        animation: ${Ellipsis1} 0.8s infinite;
    }
    div:nth-child(2) {
        left: 10px;
        animation: ${Ellipsis2} 0.8s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: ${Ellipsis3} 0.8s infinite;
    }
    div:nth-child(4) {
        left: 51px;
        animation: ${Ellipsis4} 0.8s infinite;
    }
`;

export { Loader, Ellipsis };
