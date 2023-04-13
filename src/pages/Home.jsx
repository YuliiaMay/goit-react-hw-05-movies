// import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTrandingMovies } from "services/movies-api";
import TrandingGallary from "components/TrandingGallary/TrandingGallary";


// const fetchMoviesAPI = new FetchMoviesAPI();
// console.log(fetchMoviesAPI);


const Home = () => {
    const [trends, setTrends] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        async function getTrends(page) {
            try {
                const data = await fetchTrandingMovies();
                setPage(data.page);
                setTrends(data.results);
                
                return data;
            } catch(error) {
                console.log(error.message);
            }
        }

        getTrends();



    }, []);

        console.log(page);
        console.log(trends);

    return (
        <main>
            <h1>Tranding today</h1>
            <TrandingGallary trends={trends} />

        </main>
    )
}

export default Home;