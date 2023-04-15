// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { Wrapper, SearchInput, SearchFormButton } from "./SearchForm.styled";



const SearchForm = ({value, onChange}) => {
    // const [query, setQuery] = useState('');

    // handleSubmit = (e) => {
    //     e.preventDefault();
    // }


    return (
        <Wrapper>
            <SearchInput
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <SearchFormButton type="submit">
                <FcSearch size={32}/>
            </SearchFormButton>
        </Wrapper>
        
    )
}

export default SearchForm;