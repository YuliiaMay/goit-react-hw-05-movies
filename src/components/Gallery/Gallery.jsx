import MovieCard from "components/MovieCard/MovieCard";
import { List } from "./Gallery.styled";



const Gallery = ({ movies }) => {
    return (
        <List> 
            {
                movies.map(({ id, original_language, title, vote_average, poster_path, release_date }) => 
                    <MovieCard
                        key={id}
                        movieId={id}
                        src={poster_path}
                        title={title}
                        language={original_language}
                        rating={vote_average}
                        release={release_date}
                    />
                )
            }
        </List>
    )
};

export default Gallery;