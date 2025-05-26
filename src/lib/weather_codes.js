
function WeatherOverview(description, icon) {
    this.description = description;
    this.icon = icon;
}

const codes = new Map([
    [0, new WeatherOverview("Clear Sky", "sunny.png")],
    [1, new WeatherOverview("Mostly Clear", "sunny.png")],
    [2, new WeatherOverview("Partly Cloudy", "partly-cloudy.png")],
    [3, new WeatherOverview("Overcast", "cloudy.png")],
    [45, new WeatherOverview("Foggy", "cloudy.png")],
    [48, new WeatherOverview("Foggy", "cloudy.png")],
    [51, new WeatherOverview("Light Drizzle", "rainy.png")],
    [53, new WeatherOverview("Moderate Drizzle", "rainy.png")],
    [55, new WeatherOverview("Dense Drizzle", "rainy.png")],
    [56, new WeatherOverview("Freezing Light Drizzle", "rainy.png")],
    [57, new WeatherOverview("Freezing Dense Drizzle", "rainy.png")],
    [61, new WeatherOverview("Slight Rain", "rainy.png")],
    [63, new WeatherOverview("Moderate Rain", "rainy.png")],
    [65, new WeatherOverview("Heavy Rain", "rainy.png")],
    [66, new WeatherOverview("Light Freezing Rain", "rainy.png")],
    [67, new WeatherOverview("Heavy Freezing Rain", "rainy.png")],
    [71, new WeatherOverview("Slight Snow Fall", "snowy.png")],
    [73, new WeatherOverview("Moderate Snow Fall", "snowy.png")],
    [75, new WeatherOverview("Heavy Snow Fall", "snowy.png")],
    [77, new WeatherOverview("Snow Grains", "snowy.png")],
    [80, new WeatherOverview("Slight Rain Shower", "rainy.png")],
    [81, new WeatherOverview("Moderate Rain Shower", "rainy.png")],
    [82, new WeatherOverview("Violent Rain Shower", "rainy.png")],
    [85, new WeatherOverview("Slight Snow Showers", "snowy.png")],
    [86, new WeatherOverview("Heavy Snow Showers", "snowy.png")],
    [95, new WeatherOverview("Thunderstorm", "stormy.png")],
    [96, new WeatherOverview("Thunderstorm with Slight Hail", "stormy.png")],
    [99, new WeatherOverview("Thunderstorm with Heavy Hail", "stormy.png")],
])

export default codes;