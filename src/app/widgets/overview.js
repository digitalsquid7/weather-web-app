import Image from "next/image";

export default function Overview() {
    return (
        <div id="overview">
            <WeatherIcon/>
            <TemperatureContainer/>
        </div>
    )
}

function WeatherIcon() {
    return <Image src="/sunny.png" alt="weather icon" width={300} height={300}/>
}

function TemperatureContainer() {
    return (
        <div id="temperature-container">
            <Temperature/>
            <WeatherDescription/>
        </div>
    )
}

function Temperature() {
    return <div id="temperature">23 °C</div>
}

function WeatherDescription() {
    return <div id="weather-description">Clear Skies</div>
}