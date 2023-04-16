// import { Link, Outlet } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
// import { useState } from "react";
import { fetchMoviesByQuery } from "services/movies-api";
import { useState, useEffect } from "react";
// import FoundMoviesList from "components/FoundMoviesList/FoundMoviesList";
import Gallery from "components/Gallery/Gallery";


const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected'
}


const Movies = () => {
    // const movies = fetchMoviesByQuery();
    // console.log(movies);
    const [movies, setMovies] = useState([]);
    const [status, setStatus] = useState(Status.IDLE);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("name") ?? "";
    // const [query, setQuery] = useState('');
    // const [page, setPage] = useState('');

    useEffect(() => {
        if (query === "") return;

        setStatus(Status.PENDING);

    }, [query])

    const visibleMovies = movies.filter((movie) =>
        movies.name.toLowerCase().includes(query.toLowerCase())
    );

    const updateQueryString = (name) => {
        const nextParams = name !== "" ? { name } : {};
        setSearchParams(nextParams);
    };
    // handelChange = ({target: {value}}) => {
    //     console.log(value);
    // }

    // if (status === Status.IDLE) {
    //     return (<>Let`s search something</>);
    // }



    return (
        <main>
            <SearchForm
                value={query}
                onChange={updateQueryString}
            />
            <Gallery movies={movies}/>
            {/* <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul> */}
        </main>
    )
}

export default Movies;