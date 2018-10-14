import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

import Home from './index';

describe('Header Snapshot', () => {
    test('renders', () => {
      const component = renderer.create(
        <Home />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('should render without throwing an error', function() {
      const wrapper = shallow(<Home />);
      expect(wrapper.contains(<h1>Hello Dev Bahia</h1>)).toBe(true);
    });

});
