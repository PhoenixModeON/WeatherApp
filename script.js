document.getElementById('getWeather').addEventListener('click', function() {
    let city = document.getElementById('city').value;
    if (city === "") {
        alert("Please enter a city name.");
        return;
    }

    // API URL with your API key (replace 'your-api-key' with your actual key)
    const apiKey = 'your-api-key';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert("City not found");
            } else {
                // Update the HTML with weather data
                document.getElementById('cityName').innerText = data.name;
                document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
                document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
                document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            alert("There was an error fetching the weather data.");
        });
});
