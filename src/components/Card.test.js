import { render, screen } from '@testing-library/react';
import Card from './Card';
import '@testing-library/jest-dom/extend-expect'

const city = "Amsterdam"
const weatherData = {
    date: "Thursday 2 Sep 2021",
    description: "Few clouds",
    temperature: 19,
    wind_speed: 4.82,
    sunrise: "06:53 AM",
    sunset: "08:27 PM"
};

test('matches snapshot', () => {
    const { getByTestId, asFragment  } = render(
        <Card 
            city={city}
            date={weatherData.date}
            description={weatherData.description}
            temperature={weatherData.temperature}
            windSpeed={weatherData.wind_speed}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
        />);
    
    expect(asFragment()).toMatchSnapshot();
});
