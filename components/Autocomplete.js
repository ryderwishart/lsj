import React, { useState, useEffect } from 'react'

const AutoCompleteSearch = (props) => {
    const [searchTerm, updateSearchTerm] = useState('');
    const [filteredResults, updateFilteredResults] = useState([]);

    const updateSearch = e => {
        updateSearchTerm(e.target.value);
        const results = props.wordIndices.filter(index => index.s.match(new RegExp(`^${e.target.value}`, 'gi')))
        const trimmedResults = results.slice(null,20)
        updateFilteredResults(trimmedResults)
    };

    const SearchResults = () => {
        const Message = ({ text }) => (
            <div className="message">
                <h2>{text}</h2>
                <hr />
            </div>
        );
    
        if (!filteredResults.length) {
            return <Message text="Loading search results" />
        }
    
        if (!searchTerm) {
            return <Message text="Try to search for something..." />
        }
        
        return (
            <ul className="search-results">
                {filteredResults.map((word, index) => (
                    <li key={index}>
                        {word.w}
                    </li>
                ))}
            </ul>
        );
    };

    // useEffect(() => {
    //     const getSearchResults = async () => {
    //         const searchResultsResponse = await getSearchResults();
    //         console.log(searchResultsResponse);

    //         updateSearchResults(searchResultsResponse);
    //     };
       
    //     getSearchResults();
    // }, []);

    return (
        <section className="search">
            <h1>Search {searchTerm.length ? `results for: ${searchTerm}` : null}</h1>
            <input type="text" placeholder="Search for tutorials..." onKeyUp={updateSearch} />
            <SearchResults />
        </section>
    );
}

export default AutoCompleteSearch;