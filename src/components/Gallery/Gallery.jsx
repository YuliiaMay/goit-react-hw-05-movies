import MovieCard from "components/MovieCard/MovieCard";
import { List } from "./Gallery.styled";
import { Link } from "react-router-dom";


const Gallery = ({ movies }) => {

    return (
        <List> 
            {
                movies.map(({ id, original_language, title, vote_average, backdrop_path, release_date }) => 
                    <MovieCard
                        key={id}
                        movieId={id}
                        src={backdrop_path}
                        title={title}
                        language={original_language}
                        rating={vote_average}
                        release={release_date}
                    />
                    //     <Link />
                    // </MovieCard>
                )
            }
        </List>
    )
};

export default Gallery;