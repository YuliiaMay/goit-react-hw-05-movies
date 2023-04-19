import { CardLink, Card, Image, CardMovieInfo, Title, Rating } from "./MovieCard.styled";
import { Outlet} from "react-router-dom";
import { Suspense } from "react";
import defaulMovieImage from '../../images/default-movie.jpg';

const MovieCard = ({ movieId, src, title,  rating }) => {
    const movieImg = `https://image.tmdb.org/t/p/w500${src}` ?? '/src/default.jpg';

    return (
        <Card>
            <CardLink to={`/movies/${movieId}`}>
                <Image src={
                    src
                        ? movieImg
                        : defaulMovieImage
                    }
                    alt={title} />
                <CardMovieInfo>
                    <Title>{title}</Title>
                    <Rating>Rating: {rating}</Rating>
                </CardMovieInfo>
            </CardLink>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Card>
    )
}

export default MovieCard;