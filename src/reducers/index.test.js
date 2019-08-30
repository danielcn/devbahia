import index from './index';

describe('Index Snapshot', () => {
  test('index', () => {
    expect(index).toMatchSnapshot();
  });
});
