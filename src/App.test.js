import { render, screen } from '@testing-library/react';
import App from './App';

test('renders loading text', () => {
  render(<App />);
  const loadingElement = screen.getByText(/Register.../i);
  expect(loadingElement).toBeInTheDocument();
});