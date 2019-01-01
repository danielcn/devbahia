import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import Typography from '@material-ui/core/Typography';

configure({adapter: new Adapter()});

import Header from './index';

describe('Header Snapshot', () => {
    test('renders', () => {
      const component = renderer.create(
        <Header />
      );
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('should render without throwing an error', function() {
      const wrapper = shallow(<Header />);
      expect(wrapper.contains(<Typography variant="h6" color="inherit">Dev Bahia</Typography>)).toBe(true);
    });

});
