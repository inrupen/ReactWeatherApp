import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    top: 3%;
    margin: 0.5rem;
    font-weight: 700;
    font-size: 1.5rem;
`

export default function Header() {
    return <Wrapper data-testid="header">Weather App</Wrapper>
}
