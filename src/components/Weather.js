import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import ForecastCards from "./ForecastCards";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export default function Weather(props) {
    const [city, setCity] = useState(props.city);
    const [lat, setLat] = useState(props.lat);
    const [lon, setLon] = useState(props.lon);
    const [weatherData, setWeatherData] = useState([]);
    // const [forecast, setForecast] = useState([]);

    useEffect(() => {
        setCity(props.city);
        setLat(props.lat);
        setLon(props.lon);

        fetch(
        `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily&appid=${process.env.REACT_APP_API_KEY}`
        )
        .then((response) => handleResponse(response))
        .then((responseJson) => {
            console.log(responseJson);
            const currentData = correctDataFormat(responseJson.current);
            // const futureForcastData = correctDataFormat(responseJson.hourly)
            setWeatherData(currentData);
        })
        .catch((error) => {
            console.log(error);
        });
    }, [lat, lon, props.city, props.lat, props.lon]);

    function correctDataFormat(data) {
        const formatData = {
        date: data.dt * 1000, //milliseconds
        description:
            data.weather[0].description.charAt(0).toUpperCase() +
            data.weather[0].description.slice(1),
        temperature: Math.round(data.temp),
        wind_speed: (data.wind_speed * 3.6).toFixed(2), //km per hour
        sunrise: new Date(data.sunrise * 1000).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        }), //to hour & min
        sunset: new Date(data.sunset * 1000).toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        }), //to hour & min
        };
        return formatData;
    }
    function handleResponse(response) {
        if (response.ok) {
        return response.json();
        } else {
        throw new Error("Please enable current location in your browser");
        }
    }

    return (
        <Wrapper>
        <Card
            city={props.city}
            date={weatherData.date}
            description={weatherData.description}
            temperature={weatherData.temperature}
            windSpeed={weatherData.wind_speed}
            windGust={weatherData.wind_gust}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
        />

        <ForecastCards />
        </Wrapper>
    );
}
