import { Link, Outlet } from "react-router-dom";

const Movies = () => {
    return (
        <div>
            <main>
                {/* <MoviesList /> */}
                <div>l_i_s_t</div>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Outlet />
            </main>
        </div>
    )
}

export default Movies;