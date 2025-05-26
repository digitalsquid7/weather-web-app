import Image from "next/image";
import codes from '@/lib/weather_codes';

export default function Overview({weatherData}) {
    const weatherOverview = codes.get(weatherData.current.weather_code);

    return (
        <div id="overview">
            <Image src={`/${weatherOverview.icon}`} alt="Weather Icon" width={300} height={300}/>
            <div id="temperature-container">
                <div id="temperature">{weatherData.current.temperature_2m} °C</div>
                <div id="weather-description">{weatherOverview.description}</div>
            </div>
        </div>
    )
}
