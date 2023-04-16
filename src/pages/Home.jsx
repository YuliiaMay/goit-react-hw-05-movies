// import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchTrandingMovies } from "services/movies-api";
// import TrandingGallary from "components/TrandingGallary/TrandingGallary";
import Gallery from "components/Gallery/Gallery";


const Home = () => {
    const [trends, setTrends] = useState([]);

    useEffect(() => {
        async function getTrends(page) {
            try {
                const data = await fetchTrandingMovies();
                setTrends(data.results);
                
                return data;
            } catch(error) {
                console.log(error.message);
            }
        }

        getTrends();
    }, []);

    return (
        <main>
            <h1>Tranding today</h1>
            <Gallery movies={trends} />

        </main>
    )
}

export default Home;