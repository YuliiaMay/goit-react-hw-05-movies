import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justifyContent: center;
    // background-color: #fff;
    box-shadow: none;
    // border-radius: 3px;
    overflow: hidden;
    border: 2px solid #EB8382;

    &:hover,
    &:focus,
    &:active {
        border: 3px solid #EB8382;
        box-shadow: 4px 2px 1px 1px #EAAC8B;
    }
`;

export const SearchInput = styled.input`
    width: 400px;
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