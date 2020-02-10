import React from 'react';
import Footer from "./Footer";

describe('Footer', () => {
  test('renders correctly', () => {
    const component = shallow(
      <Footer />
    );
    expect(component).toMatchSnapshot();
  });
});
