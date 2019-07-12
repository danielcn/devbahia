import React from 'react';
import { shallow } from 'enzyme';
import Jobs from './Jobs';

describe('Jobs Snapshot', () => {
  test('renders', () => {
    const jobs = shallow(<Jobs />);
    expect(jobs).toMatchSnapshot();
  });
});
