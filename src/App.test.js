import React from 'react';
import { shallow } from 'enzyme';
import Home from './pages/Home/Home'
import App from './App';

describe('App Snapshot', () => {
    test('renders', () => {
      const app = shallow(<App />)
      expect(app).toMatchSnapshot();
    });

    test('should render without throwing an error', function() {
      const app = shallow(<App />);
      expect(app.contains(<Home />)).toBe(true);
    });
});
