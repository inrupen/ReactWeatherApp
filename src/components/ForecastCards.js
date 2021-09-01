import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    margin: 1rem;
    background-color: #f5f9ff;
    border: 1px solid #808cff;
    border-radius: 8px;
    box-shadow: -8px 10px 7px -6px #777;

    .cardHeader {
        background-color: #fffee3;
        padding: 0.7rem;
        border-bottom: 1px solid #d6d6d6;
        .city {
            font-weight: 700;
            font-size: 1.3rem;
        }
    }
    .cardBody {
        padding: 0.7rem;
        min-width: 15rem;
        .parentSection {
            display: flex;
            justify-content: space-between;
        }

        .temperature {
            font-size: 3rem;
        }
        .description {
            font-size: small;
            font-style: italic;
        }
        .rightSide,
        .leftSide {
            min-width: 12rem;
        }
        .rightSide {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
    }
`

export default function ForecastCards(props) {
    function handleClick() {}

    return (
        <Wrapper onClick={handleClick}>
            <div className="cardBody">
                <div className="parentSection">
                    <div className="leftSide">
                        <div>
                            <span className="description">
                                {props.date}
                            </span>
                            <br />
                            <span className="temperature">
                                {props.temperature} °c
                            </span>
                            <br />
                            <span className="description">
                                {props.description}
                            </span>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div>Feels like: {props.feelsLike} °c</div>
                        <div>Humidity: {props.humidity} %</div>
                        <div>Wind speed: {props.windSpeed} km/hr</div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}
