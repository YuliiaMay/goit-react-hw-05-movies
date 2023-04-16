import MovieCard from "components/MovieCard/MovieCard";
import { List } from "./Gallery.styled";


const Gallery = ({ movies }) => {
    return (
        <List> 
            {
                movies.map(({id, original_language, title, vote_average, backdrop_path, release_date
}) => 
                    <MovieCard
                        key={id}
                        src={backdrop_path}
                        title={title}
                        language={original_language}
                        rating={vote_average}
                        release_date={release_date}

                    />
                )
            }
        </List>
    )
};

export default Gallery;