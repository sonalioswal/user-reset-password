import styled from 'styled-components';

export const Input = styled.input`
    height: 36px;
    padding: 5px 15px;
    font-size: 0.9rem;
    color: ${({theme}) => theme.ColorBlack};
    border: 1px solid ${({theme}) => theme.Border};
    border-radius: ${({theme}) => theme.BaseBorderRadius};
    &:focus,
    &:active {
        outline: none !important;
        border-color: ${({theme}) => theme.Border};
    }
    &:disabled {
        cursor: not-allowed;
    }
`;