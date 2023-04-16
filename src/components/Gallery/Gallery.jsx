import MovieCard from "components/MovieCard/MovieCard";

const Gallery = ({ movies }) => {
    return (
        <ul> 
            {
                movies.map(({id, original_language, title, vote_average, backdrop_path}) => 
                    <MovieCard
                        key={id}
                        src={backdrop_path}
                        title={title}
                        language={original_language}
                        rating={vote_average}
                    />
                )
            }
        </ul>
    )
};

export default Gallery;