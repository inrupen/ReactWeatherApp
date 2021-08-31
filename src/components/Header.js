import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
    margin: .5rem;
`

export default function Header () {
    return (
        <Wrapper>
            Weather App
        </Wrapper>
    )
}