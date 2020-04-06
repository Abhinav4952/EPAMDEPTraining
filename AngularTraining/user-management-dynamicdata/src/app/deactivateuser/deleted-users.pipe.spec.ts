import { DeletedUsersPipe } from './deleted-users.pipe';

describe('DeletedUsersPipe', () => {
  it('return values containing isDeleted as false', () => {
    const pipe = new DeletedUsersPipe();
    expect(pipe.transform([{isDeleted: true}, {isDeleted: false}])).toEqual([{isDeleted: false}]);
  });
});

