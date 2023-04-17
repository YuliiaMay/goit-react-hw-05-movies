import { Card, Image } from "./MovieCard.styled";
import { Link, Outlet} from "react-router-dom";
import { Suspense } from "react";

const MovieCard = ({ movieId, src, title, language, rating, release }) => {
    const movieImg = `https://image.tmdb.org/t/p/w500${src}` ?? '/src/default.jpg';

    return (
        <Card>
            <Link to={`${movieId}`}>
                <Image src={movieImg} alt={title} />
                <p>{title}</p>
                <span>{language}</span>
                <span>{rating}</span>
            </Link>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Card>
    )
}

export default MovieCard;