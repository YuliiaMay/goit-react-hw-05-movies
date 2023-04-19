import defaultImg from '../../images/default-img.png';
import { Container, Image } from 'components/DefaultImg/DefaultMoviesPageImg.styled';
import defaulMovieImage from '../../images/default-movie.jpg';

const DefaultMoviesPageImg = () => {
    return (
        <Container>
            <Image src={defaultImg} alt="background" />
        </Container>
        
    )
};

export default DefaultMoviesPageImg;