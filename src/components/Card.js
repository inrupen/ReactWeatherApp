import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: 1rem;
    /* padding: 1rem 0; */
    border: 1px solid #d6d6d6;
    border-radius: 5px;
    box-shadow: -8px 10px 7px -6px #777;

    .cardHeader {
        padding: .7rem;
        border-bottom: 1px solid #d6d6d6;
    }
    .cardBody {
        padding: .7rem;
        width: 15rem;
        .parentSection {
            display: flex;
            justify-content: space-between;
        }
        .rightSide {
            display: flex;
            flex-direction: column;
        }
    }
`

export default function Card () {
    return (
        <Wrapper>
            <div className="cardHeader">
                Amsterdam city
            </div>
            <div className="cardBody">
                <div className="parentSection">
                    <div className="leftSide">
                        <div className="childSection">
                            Temperature
                        </div>
                    </div>
                    <div className="rightSide">
                        <div className="childSection">
                            Wind speed
                        </div>
                        <div className="childSection">
                            Sunrise
                        </div>
                        <div className="childSection">
                            Sunset
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}