import { useState, useEffect } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { fetchMovieDetails } from "services/movies-api";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function getMovie(movieId) {
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
        

        // const {backdrop_path, genres,
        //     original_title,
        //     overview,
        //     popularity,
        //     poster_path,
        //     release_date } = movie;
        
    }
    getMovie(movieId);

    }, [movieId]);

    return (
        
            movieId && (
                <div>
                    {/* <a href="">Go back</a> */}
                    <div>
                        <img src="" alt="" />
                        <div>
                            <h1>
                                <span>{movie.original_title}</span>
                                <span>   ({movie.release_date})</span>
                            </h1>
                        <p>User Score - {movie.vote_average}</p>
                            <div>
                                <h2>Overview</h2>
                                <p>{movie.overview}</p>
                            </div>
                            <div>
                                <h2>Genres</h2>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Additional information</h3>
                        <ul>
                            <li><Link to="cast">Cast</Link></li>
                            <li><Link to="reviews">Review</Link></li>
                        </ul>
                        <Outlet/>
                    </div>
                </div>
            )
        
        
    )
};

export default MovieDetails;