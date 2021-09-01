import styled from "styled-components";
import Weather from "./Weather";
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
                <Weather city="Amsterdam" lat="52.370216" lon="4.895168" />
                <Weather city="Madrid" lat="40.416775" lon="-3.703790" />
                <Weather city="Roma" lat="41.890560" lon="12.494270" />
                </div>

                <div>
                <Weather city="Berlin" lat="52.53325" lon="13.36702" />
                <Weather city="Copenhagen" lat="55.68125" lon="12.578023" />
                <Weather city="Oslo" lat="59.91340" lon="10.74253" />
                </div>
            </div>
        </Wrapper>
    );
}
