import defaultImg from '../../images/default-img.png';
import { Container, Image } from 'components/FoundMoviesList/FoundMoviesList.styled';

const DefaultMoviesPageImg = () => {
    return (
        <Container>
            <Image src={defaultImg} alt="default image" />
        </Container>
        
    )
};

export default DefaultMoviesPageImg;