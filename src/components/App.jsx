import { Routes, Route } from "react-router-dom";
import Movies from "pages/Movies";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
// import NotFound from "pages/NotFound";
import { Body, StyledLink, Header } from "./App.styled";
import Cast from "./Cast/Cast";
import Reviews from "./Reviews/Reviews";


export const App = () => {
  return (
    <Body>
        <Header>
          <nav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
          </nav>
        </Header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>

    </Body>
  );
};
