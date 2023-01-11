import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import SearchVideoCard from '../components/SearchVideoCard';
import fetchData from '../utils/Api';


const Container = styled.div`

`

const Search = () => {

    const [results, setResults] = useState([]);
    const { query } = useParams();

    useEffect(() => {
        getSearchResults();
    }, [query])

    const getSearchResults = async () => {
        try {
            const { contents } = await fetchData("search/?q=" + query);
            setResults(contents);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <Container>
            {results.map((result) => {
                if (result.type !== "video") return false;
                return (
                    <SearchVideoCard key={result?.video?.videoId} video={result?.video} />
                )
            })}
        </Container>
    )
}

export default Search