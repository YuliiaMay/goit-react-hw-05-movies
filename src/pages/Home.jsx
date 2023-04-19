import { useState, useEffect } from "react";
import { fetchTrandingMovies } from "services/movies-api";
import Gallery from "components/Gallery/Gallery";
import { Title } from "./Home.styled";


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
            <Title>Tranding today</Title>
            <Gallery movies={trends} />
        </main>
    )
}

export default Home;