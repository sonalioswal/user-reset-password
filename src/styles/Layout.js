import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 15%;
    left: 35%;
    right: 35%;
    border: 1px solid ${({theme}) => theme.Border};
    justify-content: center;
    padding: 3em;
    text-align: center;
    @media (max-width: 768px) and (min-width: 320px) {
        position: inherit;
        border: none;
    }
`;