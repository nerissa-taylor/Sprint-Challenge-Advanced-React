import React from 'react';
import { render } from '@testing-library-react';
import App from './App';

test('App renders without crashing', () => {
  render(<App />);

});
test('contain Players name', () => {
  const container = render(<App />);
  container.getByText("name");
  getByText(/players/i);
  getByText(/name/i);
});