import React from 'react';
import { shallow, mount } from 'enzyme';
import MediaCard from './MediaCard';

describe('MediaCard Test', () => {
  it('Should render with snapshot', () => {
    const mediaCard = shallow(<MediaCard />);
    expect(mediaCard).toMatchSnapshot();
  });

  it('Shold have a child with with', () => {
    const styles = {
      card: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    };
    
    const mediaCard = mount(<MediaCard />);
    expect(mediaCard.find('Card')).toHaveLength(1);
  });
});