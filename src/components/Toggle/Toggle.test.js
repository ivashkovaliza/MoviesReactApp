import React from 'react';
import Toggle from './Toggle';

describe('Toggle', () => {
  const toggleValues = ['title', 'genres'];
  const handleToggleClick = () => { };

  test('renders correctly', () => {
    const component = shallow(
      <Toggle toggleValues={toggleValues} />
    );

    expect(component).toMatchSnapshot();
  });

  test('Toggling is correct', () => {
    const component = shallow(
      <Toggle toggleValues={toggleValues} handleToggleClick={handleToggleClick} />
    );

    expect(component.find('.sort__btn--left.sort__btn--active').length).toBe(1);
    expect(component.find('.sort__btn--right.sort__btn--active').length).toBe(0);
    component.find('.sort__btn--right').simulate('click');
    expect(component.find('.sort__btn--right.sort__btn--active').length).toBe(1);
    expect(component.find('.sort__btn--left.sort__btn--active').length).toBe(0);
  });
});
