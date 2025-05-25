export default function Statistics() {
    return (
        <div id="weather-details">
            <WeatherCard title="Humidity" value="70%"/>
            <WeatherCard title="Wind" value="10 km/h"/>
            <WeatherCard title="Pressure" value="1023 hPa"/>
            <WeatherCard title="Rain" value="0 mm"/>
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