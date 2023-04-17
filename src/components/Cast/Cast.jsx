import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "services/movies-api";


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
        
    }, [movieCast]);


    return (
        <section>
            <ul>
                {
                    movieCast.map(({ name, character, profile_path }) => {
                        const imgPath = `https://image.tmdb.org/t/p/w500${profile_path}`;
                        return (
                            <li>
                                <img src={imgPath} alt={name} />
                                <p>Player name: {name}</p>
                                <p>Character: {character}</p>
                                
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )

};

export default Cast;