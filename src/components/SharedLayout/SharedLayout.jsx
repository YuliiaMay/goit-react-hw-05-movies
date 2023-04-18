import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, StyledLink, Header } from "./SharedLayout.styled";


export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <StyledLink to="/" end>Home</StyledLink>
                    <StyledLink to="movies">Movies</StyledLink>
                </nav>
            </Header>

            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Container>
    );
};