import React, {useState} from 'react';
import "./SearchResult.css"
import searchbarlookingglass from "../../assets/pictures/search.png"
import axios from "axios";
import {FilterShows} from "../../components/FilterShows/FilterShows";

export function SearchResult() {
    const [searchTerm, setSearchTerm] = useState('');
    const [counterValue, setCounterValue] = useState(0);
    const [apiReturn, setApiReturn] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData(searchTerm)
    }

    async function fetchData(searchTerm){
        try {
            axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
                .then(response => {
                    setApiReturn(response.data.map(item => item.show));
                })
        } catch(e) {
            console.error(e)
            alert('Failed to load! Please try again in 30 seconds, if it still fails the API might be down. Sorry for any inconvenience! Please try again tomorrow.')
        }
    }

    return (
        <div>
            <form className="search-bar-looking-glass" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <img src={searchbarlookingglass} alt="Looking glass"/>
                </button>
            </form>
            <div className="rating-visual-rating-slider">
                <p>Minimal rating: {counterValue}</p>
                <input
                    type="range"
                    min="0"
                    max="10"
                    value={counterValue}
                    onChange={(e) => setCounterValue(e.target.value)}
                />
            </div>
            {apiReturn.length >= 0 &&
                <div className="searchResultPage">
                    <FilterShows apiResult={apiReturn} minimumRating={counterValue} />
                </div>
            }

        </div>
    );
}