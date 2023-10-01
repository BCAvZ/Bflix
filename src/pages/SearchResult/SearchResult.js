import React, {useState} from 'react';
import "./SearchResult.css"


export function SearchResult() {
    const [searchTerm, setSearchTerm] = useState(''); // State for search input
    const [counterValue, setCounterValue] = useState(0); // State for counter

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>a</p>
            <p>Minimal rating: {counterValue}</p>
            <input
                type="range"
                min="0"
                max="10"
                value={counterValue}
                onChange={(e) => setCounterValue(e.target.value)}
            />

        </div>
    );
}