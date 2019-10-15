import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu Snapshot', () => {
  test('renders', () => {
    const menu = shallow(<Menu />);
    expect(menu).toMatchSnapshot();
  });
});
