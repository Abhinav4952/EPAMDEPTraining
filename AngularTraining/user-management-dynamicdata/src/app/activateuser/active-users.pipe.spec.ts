import { ActiveUsersPipe } from './active-users.pipe';

describe('ActiveUsersPipe', () => {
  it('should return only active users', () => {
    const pipe = new ActiveUsersPipe();
    expect(pipe.transform([{isDeleted: true}, {isDeleted: false}])).toEqual([{isDeleted: true}]);
  });
});

