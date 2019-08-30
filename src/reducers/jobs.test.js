import jobs from './jobs';

describe('Event Snapshot', () => {
  test('jobs', () => {
    expect(jobs).toMatchSnapshot();
  });
});
