import { Gallery } from "./TrandingGallary.styled"
import MovieCard from "components/MovieCard/MovieCard";


const TrandingGallary = ({trends}) => {
    return (
        <Gallery>
            {
                trends.map(({id, original_language, title, vote_average, backdrop_path}) => 
                    <MovieCard
                        key={id}
                        src={backdrop_path}
                        title={title}
                        language={original_language}
                        rating={vote_average}
                    />
                )
            }
        </Gallery>
    )
};

export default TrandingGallary;