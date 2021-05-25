import styled from 'styled-components';

export const Button = styled.button`
    position: relative; 
    width: 100%;
    border-radius: 3px;
    padding: 0.5rem 0;
    background: green;
    color: ${({theme}) => theme.ColorWhite};
    font-size: 1rem;
    border: 1px solid ${({theme}) => theme.Border};
    &:hover {
        cursor: pointer;
    }
    &:disabled {
        cursor: not-allowed;
    }
`;