import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.body`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
    color: #010101;
    background-color: #FFE6D7;
`;

export const StyledLink = styled(NavLink)`
    color: #446381;

    &.active {
        color: #EB8382;
    }
`;