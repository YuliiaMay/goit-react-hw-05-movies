import styled from "styled-components";

export const LoadMoreButton = styled.button`
    margin-bottom: 80px;
    padding: 16px 20px;
    border-radius: 2px;
    background-color: #EB8382;
    border: 1px solid #826F8C;
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
    text-align: center;
    display: inline-block;
    align-items: center;
    margin-left: auto; 
    margin-right: auto; 
    justify-content: center;
    color: #826F8C;
    border: 0;
    text-decoration: none;
    cursor: pointer;
    font-size: 32px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    width: 250px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    
    &:hover,
    &:focus {
        background-color: #446381;
        color: #fff
    }
    
`