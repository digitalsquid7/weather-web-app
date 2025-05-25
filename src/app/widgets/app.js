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
        return <div>Loading...</div>;
    }


    return (
        <>
            <Overview weatherData={weatherData}/>
            <Statistics weatherData={weatherData}/>
        </>
    )
}
