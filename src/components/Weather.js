import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default function Weather (props) {
  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/onecall?lat=${props.lat}&lon=${props.lon}&exclude=minutely,daily&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then(response => handleResponse(response))
      .then(responseJson => {
        console.log(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  }, [])

  function handleResponse(response) {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Please enable current location in your browser");
    }
  }

  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}
