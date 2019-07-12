import React from 'react';
import { shallow } from 'enzyme';
import Event from './Event';

describe('Event Snapshot', () => {
  test('renders', () => {
    const event = shallow(<Event />);
    expect(event).toMatchSnapshot();
  });
});
