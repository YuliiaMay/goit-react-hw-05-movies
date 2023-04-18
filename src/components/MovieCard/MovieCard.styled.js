import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
    text-decoration: none;
    color: #446381;
` 

export const Card = styled.div`
    width: 325px;
    height: 600px;
    // border: 1px solid #446381;
    cursor: pointer;
    border: 3px solid #C37A87;

    &:hover,
    &:focus {
        transform: scale(1.015);
    }
`;

export const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    width: 100%;
`;

export const CardMovieInfo = styled.div`
    background-color: #C37A87;
    height: 100px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.p`
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 24px;
    color: #FFFFFF;
`;

export const Rating = styled.p`
    margin: 0;
    font-size: 20px;
    color: #446381;
`;

export const LanguageCircle = styled.div`
    position: relative;
    background-color: #FFECEC;
    border: 1px solid #C37A87;
    display: flex;
    justify-content: center;
    text-align: center;

    width: 36px;
    height: 36px;
    border-radius: 24px;
    top: -575px; 
    left: 10px;
`

export const Language = styled.span`
    margin: 0;
    font-size: 22px;
    line-height: 1.4;
`;

