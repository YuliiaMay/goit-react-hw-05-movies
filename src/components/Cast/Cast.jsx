import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/movies-api";
import { CastContainer, CastList, CastItem, Image, Character, Player } from "./Cast.styled";
import defaultActorPhoto from '../../images/no-avatar.jpg'


const Cast = () => {
    const { movieId } = useParams();
    const [movieCast, setMovieCast] = useState([]);


    useEffect(() => {
        async function getMovieCast(movieId) {
            const data = await fetchMovieCast(movieId);
            setMovieCast(data.cast)
            // const castImg = `https://image.tmdb.org/t/p/w500${profile_path}`
            // console.log(cast);
        }

        getMovieCast(movieId);
        
    }, [movieId]);


    return (
        <CastContainer>
            <CastList>
                {
                    movieCast.map(({ name, character, profile_path }) => {
                        const imgPath = `https://image.tmdb.org/t/p/w500${profile_path}`;
                        return (
                            <CastItem>
                                <Image
                                    src={
                                    profile_path
                                        ? imgPath
                                        : defaultActorPhoto}
                                    alt={name}/>
                                <Player>Player name: <br/> {name}</Player>
                                <Character>Character: <br/> {character}</Character>
                            </CastItem>
                        )
                    })
                }
            </CastList>
        </CastContainer>
    )

};

export default Cast;