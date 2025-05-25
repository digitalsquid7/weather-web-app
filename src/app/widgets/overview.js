import Image from "next/image";

export default function Overview({weatherData}) {
    return (
        <div id="overview">
            <WeatherIcon/>
            <TemperatureContainer weatherData={weatherData}/>
        </div>
    )
}

function WeatherIcon() {
    return <Image src="/sunny.png" alt="weather icon" width={300} height={300}/>
}

function TemperatureContainer({weatherData}) {
    console.log('weather data: ', weatherData);

    return (
        <div id="temperature-container">
            <div id="temperature">{weatherData.current.temperature_2m} °C</div>
            <div id="weather-description">Clear Skies</div>
        </div>
    )
}
