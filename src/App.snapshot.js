import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Home from './pages/Home'

configure({adapter: new Adapter()});

import App from './App';

describe('App Snapshot', () => {
    test('renders', () => {
      const component = renderer.create(
        <App />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('should render without throwing an error', function() {
      const wrapper = shallow(<App />);
      expect(wrapper.contains(<Home />)).toBe(true);
    });

});
