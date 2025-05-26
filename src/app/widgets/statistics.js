export default function Statistics({weatherData}) {
    return (
        <div id="weather-details">
            <WeatherCard title="Humidity" value={`${weatherData.current.relative_humidity_2m}%`}/>
            <WeatherCard title="Wind" value={`${weatherData.current.wind_speed_10m} km/s`}/>
            <WeatherCard title="Pressure" value={`${weatherData.current.surface_pressure} hPa`}/>
            <WeatherCard title="Precipitation" value={`${weatherData.current.precipitation} mm`}/>
        </div>
    )
}

function WeatherCard({title, value}) {
    return (
        <div id="weather-card">
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    )
}