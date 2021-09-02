import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Card from "./Card"
import ForecastCards from "./ForecastCards"
import Today from "./Today"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .forecastCity {
        text-align: center;
        width: 10rem;
        background-color: #fffee3;
        border: 1px solid #ffffff;
        border-radius: 8px;
        box-shadow: -8px 10px 7px -6px #777;
        padding: 0.7rem;
        font-weight: 700;
        font-size: 1.3rem;

        &:hover {
            color: #b91d11;
        }

        .close {
            position: sticky;
            width: 20px;
            height: 20px;
            opacity: 0.3;
        }
        .close:hover {
            opacity: 1;
        }
        .close:before,
        .close:after {
            position: absolute;
            left: 25px;
            content: " ";
            height: 20px;
            width: 2px;
            background-color: #333;
        }
        .close:before {
            transform: rotate(45deg);
        }
        .close:after {
            transform: rotate(-45deg);
        }
    }
    .forecastGrid {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 1em;
        max-width: 70%;
        column-gap: 1em;
    }
`

export default function Weather({
    open,
    setOpen,
    openForecast,
    setOpenForecast,
    setSelectedForecastCity,
    ...props
}) {
    const [city, setCity] = useState(props.city)
    const [lat, setLat] = useState(props.lat)
    const [lon, setLon] = useState(props.lon)
    const [weatherData, setWeatherData] = useState([])
    const [forecast, setForecast] = useState([])
    useEffect(() => {
        setCity(props.city)
        setLat(props.lat)
        setLon(props.lon)

        fetch(
            `${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,daily&appid=${process.env.REACT_APP_API_KEY}`
        )
            .then(response => handleResponse(response))
            .then(responseJson => {
                const currentData = correctDataFormat(responseJson.current)
                setForecast(responseJson.hourly)
                setWeatherData(currentData)
            })
            .catch(error => {
                console.log(error)
            })
    }, [lat, lon, props.city, props.lat, props.lon])

    function correctDataFormat(data) {
        const formatData = {
            date: data.dt * 1000,
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
        }
        return formatData
    }

    const ForecastList = forecast.slice(1, 7).map((data, i) => (
        <ForecastCards
            key={i}
            date={new Date(data.dt * 1000).toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            })}
            description={
                data.weather[0].description.charAt(0).toUpperCase() +
                data.weather[0].description.slice(1)
            }
            temperature={Math.round(data.temp)}
            feelsLike={Math.round(data.feels_like)}
            humidity={data.humidity}
            windSpeed={(data.wind_speed * 3.6).toFixed(2)}
        />
    ))

    function handleResponse(response) {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("Check your api calls")
        }
    }

    return (
        <Wrapper>
            <div
                onClick={() => {
                    setOpen(!open)
                    setOpenForecast(!openForecast)
                    setSelectedForecastCity(props.city)
                }}
            >
                {open && (
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
                )}
            </div>

            {openForecast && props.city === props.selectedForecastCity && (
                <>
                    <Today />
                    <span
                        className="forecastCity"
                        onClick={() => {
                            setOpen(!open)
                            setOpenForecast(!openForecast)
                        }}
                    >
                        {city}
                        <a href="#" className="close" role="button"></a>
                    </span>
                    <div className="forecastGrid">{ForecastList}</div>
                </>
            )}
        </Wrapper>
    )
}
