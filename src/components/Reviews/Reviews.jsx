import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "services/movies-api";



const Reviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
        async function getReview(movieId) {
            const data = await fetchMovieReviews(movieId);
            setMovieReviews(data.results);
        };

        getReview(movieId);


    }, [movieId])
        
    return (
        <div>
            <ul>
                {
                    movieReviews.map(({ author, content, updated_at }) => {
                        const publishDate = updated_at.slice(0, 10);

                        return (
                            <li>
                                <p>{content}</p>
                                <p>{author}</p>
                                <p>Published: {publishDate}</p>
                            </li>
                        )
                    }

                    )
                }
            </ul>

        </div>
    )
};

export default Reviews;