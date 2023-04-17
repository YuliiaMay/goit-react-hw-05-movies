import { FcSearch } from "react-icons/fc";
import { Container, Form, SearchInput, SearchFormButton } from "./SearchForm.styled";
// import { toast } from 'react-toastify';


const SearchForm = ({onSubmit}) => {
    //     if (query.trim() === '') {
    //         toast('Please enter a search query', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //         });



    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <SearchInput
                    type="text"
                    name="title"
                />
                <SearchFormButton type="submit">
                    <FcSearch size={32}/>
                </SearchFormButton>
            </Form>
        </Container>
        
    )
}

export default SearchForm;