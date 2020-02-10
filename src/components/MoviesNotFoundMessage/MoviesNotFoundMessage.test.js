import React from 'react';
import MoviesNotFoundMessage from './MoviesNotFoundMessage';

describe('MoviesNotFoundMessage', () => {
  test('renders correctly', () => {
    const component = shallow(
      <MoviesNotFoundMessage />
    );
    expect(component).toMatchSnapshot();
  });
});
