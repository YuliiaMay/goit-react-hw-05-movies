import { useSearchParams } from "react-router-dom";
import SearchForm from "components/SearchForm/SearchForm";
import { fetchMoviesByQuery } from "services/movies-api";
import { useState, useEffect } from "react";
import Gallery from "components/Gallery/Gallery";
import { toast } from 'react-toastify';
import DefaultMoviesPageImg from "components/DefaultImg/DefaultMoviesPageImg";


const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const title = (searchParams.get("title") ?? "").trim();


    useEffect(() => {
        if (title === '') return;

        setMovies([]);

        async function getMovies(title) {
            try {
                const data = await fetchMoviesByQuery(title);
                const foundMovies = data.results;
                const sortedMoviesm = foundMovies.sort((firstMovie, secondMovie) =>
                    secondMovie.vote_average - firstMovie.vote_average
                )
                setMovies(sortedMoviesm);
            } catch (error) {
                console.log(error);
                toast.error('No results found', { duration: 3000 });
            }
        }

        getMovies(title);
    }, [title])


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const searchQuery = form.elements.title.value;
        setSearchParams({ title: searchQuery });
        form.reset();
    }


    return (
        <main>
            <SearchForm
                onSubmit={handleSubmit}
            />
            {
                (movies.length === 0)
                    ? <DefaultMoviesPageImg />
                    : <Gallery movies={movies}/>
            }
            
        </main>
    )
}

export default Movies;