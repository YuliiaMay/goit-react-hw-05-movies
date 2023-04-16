import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justifyContent: center;
    overflow: hidden;
`;

export const Form = styled.form`
    padding: 0;
    display: flex;


    &:hover,
    &:focus,
    &:active {
        border: 3px solid #EB8382;
        box-shadow: 4px 2px 1px 1px #EAAC8B;
    }
`

export const SearchInput = styled.input`
    width: 400px;
    margin-top: 0; 
    height: 30px;
    font-size: 24px;
    color: #446381;
    padding: 8px;
    background-color: #FEF1E9;
    border: none;
`;

export const SearchFormButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    
    &:hover {
        opacity: 1;
    }
`;