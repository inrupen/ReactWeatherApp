import styled from "styled-components";
import Weather from './Weather';
import Header from "./Header";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .align {
    display: flex;
    justify-content: center;  
  }
`;


export default function Main() {
  return (
    <Wrapper>

      <Header />
      <div className="align">
        <div>
          <Weather city="chicago" lat="33.44" lon="-94.04"/>
          <Weather city="chicago" lat="33.44" lon="-94.04"/>
          <Weather city="chicago" lat="33.44" lon="-94.04"/>
        </div>
        
        <div>
          <Weather city="chicago" lat="33.44" lon="-94.04"/>
          <Weather city="chicago" lat="33.44" lon="-94.04"/>
          <Weather city="chicago" lat="33.44" lon="-94.04"/>
        </div>
      </div>
    </Wrapper>
  );
}