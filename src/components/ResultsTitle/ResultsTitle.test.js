import React from 'react';
import ResultsTitle from './ResultsTitle';

describe('ResultsTitle', () => {
  test('renders correctly', () => {
    const component = shallow(
      <ResultsTitle />
    );
    expect(component).toMatchSnapshot();
  });
});
