import { useState, useEffect } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";
import { Container, Image, MovieTitle, MovieInfo, ReleaseDate, Score, Subtitle, Overview, Genres, GenresItem, Genre, AdditionalContainer, InfoList, InfoItem, StyledNavLink} from "./MovieDetails.styled";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState([]);
    const location = useLocation();


    useEffect(() => {
        async function getMovie(movieId) {
            const movie = await fetchMovieDetails(movieId);
            setMovie(movie);
            setGenres(movie.genres)
        }
        getMovie(movieId);
    }, [movieId]);

    

    return (
        
            movieId && (
                <div>
                    <Link to="movies/${movieId}">Go back</Link>
                    <Container>
                        <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.original_title} />
                        <MovieInfo>
                            <MovieTitle>
                                <span>{movie.original_title}</span>
                                <ReleaseDate>   ({movie.release_date && movie.release_date.slice(0, 4)})  </ReleaseDate>
                            </MovieTitle>
                            <Score>User Score - {movie.vote_average}</Score>
                            <div>
                                <Subtitle>Overview</Subtitle>
                                <Overview>{movie.overview}</Overview>
                            </div>
                            <div>
                                <Subtitle>Genres</Subtitle>
                                <Genres>
                                    {
                                        genres.map(({id, name}) =>
                                            <GenresItem key={id}>
                                                <Genre>{name}</Genre>
                                            </GenresItem>
                                        )
                                    }
                                </Genres>
                            </div>
                        </MovieInfo>
                    </Container>
                    <AdditionalContainer>
                        <Subtitle>Additional information</Subtitle>
                        <InfoList>
                            <InfoItem><StyledNavLink to="cast">Cast</StyledNavLink></InfoItem>
                            <InfoItem><StyledNavLink to="reviews">Review</StyledNavLink></InfoItem>
                        </InfoList>
                        <Outlet/>
                    </AdditionalContainer>
                </div>
            )
        
        
    )
};

export default MovieDetails;