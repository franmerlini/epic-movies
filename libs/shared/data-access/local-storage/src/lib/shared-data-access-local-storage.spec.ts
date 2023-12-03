import { sharedDataAccessLocalStorage } from './shared-data-access-local-storage';

describe('sharedDataAccessLocalStorage', () => {
  it('should work', () => {
    expect(sharedDataAccessLocalStorage()).toEqual('shared-data-access-local-storage');
  });
});
