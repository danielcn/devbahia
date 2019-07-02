import React from 'react';
import { shallow } from 'enzyme';
import Message from './Message';

function setup() {
  const props = {
    imgPath: 'some/image/path/to/a/mock/image',
  };
  const message = shallow(<Message />);
  return { message, props };
}

describe('Message Test Suite', () => {
  it('Should have an image', () => {
    const { message } = setup();
    expect(message.find('img').exists()).toBe(true);
  });
});