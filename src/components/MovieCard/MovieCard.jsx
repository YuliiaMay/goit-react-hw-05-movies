import { Card } from "./MovieCard.styled";

const MovieCard = ({ src, title, language, rating }) => {
    const movieImg = `https://image.tmdb.org/t/p/w500${src}`;

    return (
        <Card>
            <img src={movieImg} alt={title} />
            <p>{title}</p>
            <span>{language}</span>
            <span>{rating}</span>
        </Card>
    )
}

export default MovieCard;