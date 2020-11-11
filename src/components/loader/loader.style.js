import styled from 'styled-components'

export const LoaderWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(255,255,255,0.7);
    z-index: 1000;

    & > img {
        position: absolute;
        display: block;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 300px;
    }
`