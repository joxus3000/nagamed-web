import { render, screen } from '@testing-library/react';
import Login from './js/Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
