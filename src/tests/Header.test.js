import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from '../components/Header';
import '@testing-library/jest-dom/extend-expect';

const mockStore = configureStore([]);

test('render Header component correctly', () => {
  const mockCountries = [
    { name: 'Country 1' },
    { name: 'Country 2' },
    { name: 'Country 3' },
  ];

  const store = mockStore({ countries: { countries: mockCountries } });

  const { container } = render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );

  expect(container.firstChild).toMatchSnapshot();
});
