import { render, screen } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom/extend-expect'

test('renders weather-app with correct text', () => {
    const { getByTestId } = render(<Header />);
    const headerElement = getByTestId("header")

    expect(headerElement.textContent).toBe("Weather App");
});
