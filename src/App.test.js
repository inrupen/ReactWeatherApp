import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom/extend-expect'

test('renders weather-app with correct text', () => {
    render(<App />);
    const linkElement = screen.getByText(/weather/i);

    expect(linkElement).toBeInTheDocument();
});
