import styled from 'styled-components';

export const Form = styled.form`
    margin-bottom: 20px;
`;

export const FormItem = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-bottom: 20px;
`;

export const FormLabel = styled.label`
    margin-bottom: 10px;
`;

export const FormError = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    color: ${({theme}) => theme.Error};
`;