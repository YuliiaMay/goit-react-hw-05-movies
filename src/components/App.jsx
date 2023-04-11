import { Routes, Route } from "react-router-dom";
import Movies from "pages/Movies";
import Home from "pages/Home";
import MovieDetails from "pages/MovieDetails";
// import NotFound from "pages/NotFound";
import { Wrapper, StyledLink } from "./App.styled";


export const App = () => {
  return (
    <Wrapper>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:movieId' element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Wrapper>
  );
};
