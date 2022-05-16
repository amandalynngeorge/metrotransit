import { render, screen } from '@testing-library/react';
import App from './App';

test('renders departures title', () => {
  render(<App />);
  expect(screen.getByText(/departures/i)).toBeTruthy();
});
