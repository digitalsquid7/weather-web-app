"use client";

import {useState} from "react";

export default function SearchArea({cities}) {
    const [searchText, setSearchText] = useState('')
    return (
        <div id="search-area-container">
            <div id="search-area">
                <SearchBar searchText={searchText} setSearchText={setSearchText}/>
                <SearchSuggestions cities={cities} searchText={searchText} setSearchText={setSearchText}/>
            </div>
        </div>
    )
}

function SearchBar({searchText, setSearchText}) {
    return (
        <form autoComplete="off">
            <input id="search-bar" type="text" placeholder="Search..." autoComplete="off"
                   value={searchText} onChange={e => setSearchText(e.target.value)}/>
        </form>
    )
}

function SearchSuggestions({cities, searchText, setSearchText}) {
    if (searchText.length === 0) {
        return;
    }

    let suggestions = [];

    for (const city of cities) {
        if (!city.name.toLowerCase().startsWith(searchText.toLowerCase()) || city.name === searchText) {
            continue;
        }

        suggestions.push(<SearchSuggestion key={city.name} value={city.name} setSearchText={setSearchText}/>)

        if (suggestions.length === 10) {
            break;
        }
    }

    return <div id="search-suggestions">{suggestions}</div>
}

function SearchSuggestion({value, setSearchText}) {
    return <div className="search-suggestion" onClick={() => setSearchText(value)}>{value}</div>
}