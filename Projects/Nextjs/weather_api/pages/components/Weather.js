import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}= INDIA`
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Weather App</h1>
      <h2>Current Weather:</h2>
      {/* <p>Location: {weatherData.location.name}, {weatherData.location.country}</p> */}
      {/* <p>Temperature: {weatherData.current.temp_c}°C</p> */}
      {/* <p>Condition: {weatherData.current.condition.text}</p> */}
    </div>
  );
};

export default Weather;

