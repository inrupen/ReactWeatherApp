import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 1rem;
    /* padding: 1rem 0; */
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    box-shadow: -8px 10px 7px -6px #777;
    cursor: pointer;
	transition: 0.2s;

    &:hover {
		transform: translateY(-6px);
		.cardHeader {
			color: #b91d11;
		}
	}

    .cardHeader {
        background-color: #fffee3;
        padding: .7rem;
        border-bottom: 1px solid #d6d6d6;
        .city {
            font-weight: 700;
            font-size: 1.3rem;
        }
    }
    .cardBody {
        padding: .7rem;
        min-width: 15rem;
        .parentSection {
            display: flex;
            justify-content: space-between;
        }
        
        .temperature{
            font-size: 3rem;
        }
        .description{
            font-size: small;
            font-style: italic;
        }
        .rightSide, .leftSide{
            min-width: 12rem;
        }
        .rightSide {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
        }
    }
`

export default function ForecastCards (props) {

    let todaysDate = new Date();
    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];
    let date = todaysDate.getDate();
    let month = monthsList[todaysDate.getMonth()];
    let year = todaysDate.getFullYear();
    let day = daysList[todaysDate.getDay()];
    let today = `${day} ${date} ${month} ${year}`;

    function handleClick() {
        
    }

    return (
        <Wrapper onClick={handleClick} >
            <div className="cardBody">
                <div className="parentSection">
                    <div className="leftSide">
                        <div className="childSection">
                            <span className="date">{today}</span><br />
                            <span className="temperature">{props.temperature} °c</span><br />
                            <span className="description">{props.description}</span>
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="childSection">
                            Wind speed: {props.windSpeed} km/hr
                        </div>
                        <div className="childSection">
                            Sunrise: {props.sunrise} 
                        </div>
                        <div className="childSection">
                            Sunset: {props.sunset}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}