import { render, screen } from '@testing-library/react';
import ForecastCards from './ForecastCards';
import '@testing-library/jest-dom/extend-expect'

const weatherData = {
    date: "Thursday 2 Sep 2021",
    temperature: 19,
    description: "Few clouds",
    feels_like: 24,
    humidity: 55,
    wind_speed: 4.82
};

test('matches snapshot', () => {
    const { getByTestId, asFragment  } = render(
        <ForecastCards 
            key={1}
            date={weatherData.date}
            description={weatherData.description}
            temperature={weatherData.temperature}
            feelsLike={weatherData.feels_like}
            humidity={weatherData.humidity}
            windSpeed={weatherData.wind_speed}
        />);
    
    expect(asFragment()).toMatchSnapshot();
});
