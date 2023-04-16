import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { Container, Form, SearchInput, SearchFormButton } from "./SearchForm.styled";
import { toast } from 'react-toastify';


const SearchForm = ({onSubmit}) => {
    const [query, setQuery] = useState('');

    // handleSubmit = (e) => {
    //     e.preventDefault();

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

    //         return;
    //     }
    // }


    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <SearchInput
                    type="text"
                    name="title"
                    // onChange={(e) => onChange(e.target.value)}
                />
                <SearchFormButton type="submit">
                    <FcSearch size={32}/>
                </SearchFormButton>
            </Form>
        </Container>
        
    )
}

export default SearchForm;