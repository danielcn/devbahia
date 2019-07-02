import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@material-ui/core/Typography';
import Header from './Header';

describe('Header Snapshot', () => {
  test('renders', () => {
    const header = shallow(<Header />);
    expect(header).toMatchSnapshot();
  });

  test('should render without throwing an error', function() {
    const header = shallow(<Header />);
    expect(header.contains(<Typography variant="h6" color="inherit">Dev Bahia</Typography>)).toBe(true);
  });
});
