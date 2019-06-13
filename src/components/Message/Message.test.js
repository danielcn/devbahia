import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const wrapper = shallow(<Message />);
  return { wrapper, props };
}

describe('Message Test Suite', () => {
  it('Should have an image', () => {
    const { wrapper } = setup();
    expect(wrapper.find('img').exists()).toBe(true);
  });
});