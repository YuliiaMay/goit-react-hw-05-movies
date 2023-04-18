import { CardLink, Card, Image, CardMovieInfo, Title, Rating, LanguageCircle, Language } from "./MovieCard.styled";
import { Outlet} from "react-router-dom";
import { Suspense } from "react";

const MovieCard = ({ movieId, src, title, language, rating, release }) => {
    const movieImg = `https://image.tmdb.org/t/p/w500${src}` ?? '/src/default.jpg';

    return (
        <Card>
            <CardLink to={`${movieId}`}>
                <Image src={movieImg} alt={title} />
                <CardMovieInfo>
                    <Title>{title}</Title>
                    <Rating>Rating: {rating}</Rating>
                </CardMovieInfo>
                <LanguageCircle>
                    <Language>{language}</Language>
                </LanguageCircle>
                
            </CardLink>
            <Suspense fallback={<div>Loading page...</div>}>
                <Outlet />
            </Suspense>
        </Card>
    )
}

export default MovieCard;