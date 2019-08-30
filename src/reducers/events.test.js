import event from './events';

describe('Event Snapshot', () => {
  test('events', () => {
    expect(event).toMatchSnapshot();
  });
});
