import React from 'react';
import Logo from './Logo';

describe('Logo', () => {
  test('renders correctly', () => {
    const component = shallow(
      <Logo />
    );
    expect(component).toMatchSnapshot();
  });
});
