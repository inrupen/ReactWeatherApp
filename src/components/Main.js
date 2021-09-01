import React, { useEffect, useState, useRef } from "react"
import styled from "styled-components"
import Weather from "./Weather"
import Header from "./Header"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .align {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 2em;
        column-gap: 5em;
    }
`

export default function Main() {
    const [open, setOpen] = useState(true)
    const [openForecast, setOpenForecast] = useState(false)
    const [selectedForecastCity, setSelectedForecastCity] = useState("")

    return (
        <Wrapper>
            <Header />
            <div className="align">
                    <Weather
                        city="Amsterdam"
                        lat="52.370216"
                        lon="4.895168"
                        open={open}
                        setOpen={setOpen}
                        openForecast={openForecast}
                        setOpenForecast={setOpenForecast}
                        selectedForecastCity={selectedForecastCity}
                        setSelectedForecastCity={setSelectedForecastCity}
                    />
                    <Weather
                        city="Madrid"
                        lat="40.416775"
                        lon="-3.703790"
                        open={open}
                        setOpen={setOpen}
                        openForecast={openForecast}
                        setOpenForecast={setOpenForecast}
                        selectedForecastCity={selectedForecastCity}
                        setSelectedForecastCity={setSelectedForecastCity}
                    />
                    <Weather
                        city="Roma"
                        lat="41.890560"
                        lon="12.494270"
                        open={open}
                        setOpen={setOpen}
                        openForecast={openForecast}
                        setOpenForecast={setOpenForecast}
                        selectedForecastCity={selectedForecastCity}
                        setSelectedForecastCity={setSelectedForecastCity}
                    />
                    <Weather
                        city="Berlin"
                        lat="52.53325"
                        lon="13.36702"
                        open={open}
                        setOpen={setOpen}
                        openForecast={openForecast}
                        setOpenForecast={setOpenForecast}
                        selectedForecastCity={selectedForecastCity}
                        setSelectedForecastCity={setSelectedForecastCity}
                    />
                    <Weather
                        city="Copenhagen"
                        lat="55.68125"
                        lon="12.578023"
                        open={open}
                        setOpen={setOpen}
                        openForecast={openForecast}
                        setOpenForecast={setOpenForecast}
                        selectedForecastCity={selectedForecastCity}
                        setSelectedForecastCity={setSelectedForecastCity}
                    />
                    <Weather
                        city="Oslo"
                        lat="59.91340"
                        lon="10.74253"
                        open={open}
                        setOpen={setOpen}
                        openForecast={openForecast}
                        setOpenForecast={setOpenForecast}
                        selectedForecastCity={selectedForecastCity}
                        setSelectedForecastCity={setSelectedForecastCity}
                    />
            </div>
        </Wrapper>
    )
}
