import React from 'react';
import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  test('renders correctly', () => {
    const component = shallow(
      <PageNotFound />
    );
    expect(component).toMatchSnapshot();
  });
});
