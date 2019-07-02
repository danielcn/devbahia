import React from 'react';
import { shallow } from 'enzyme';

import Home from './Home';

describe('Header Snapshot', () => {
  test('renders', () => {
    const home = shallow(<Home />);
    expect(home).toMatchSnapshot();
  });

  test('should render without throwing an error', function() {
    const home = shallow(<Home />);
    expect(home.contains(<h1>Hello Dev Bahia</h1>)).toBe(true);
  });
});
