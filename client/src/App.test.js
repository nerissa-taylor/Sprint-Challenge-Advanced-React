import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('contain Players name, () =>
{
   { getByText } = render(<App />)
    getByText(/players/i);
getByText(/name/i);
});