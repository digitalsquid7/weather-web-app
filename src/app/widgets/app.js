"use client";

import Overview from "@/app/widgets/overview";
import Statistics from "@/app/widgets/statistics";
import {useEffect, useState} from "react";
import SearchArea from "@/app/widgets/search_area";

export default function App({cities}) {
    const [searchText, setSearchText] = useState('')

    let city = cities.find(e => e.name === searchText);

    return (
        <div id="container">
            <SearchArea cities={cities} searchText={searchText} setSearchText={setSearchText}/>
            {city !== undefined && <Results city={city} searchText={searchText}/>}
        </div>
    )
}

function Results({city}) {
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lng}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,surface_pressure`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                console.error('Error fetching weather:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [url]);


    if (isLoading) {
        return (
            <div id="loading-container">
                <svg id="loading-icon" style={{ transform: 'rotate(45deg)' }} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512">
                    <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/>
                </svg>
            </div>
        );
    }


    return (
        <>
            <Overview weatherData={weatherData}/>
            <Statistics weatherData={weatherData}/>
        </>
    )
}
