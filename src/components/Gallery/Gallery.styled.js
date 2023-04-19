import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    width: calc((100% - 3 * 30px) / 4);
`;