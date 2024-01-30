import {load} from './load.action';

describe('load actions', () => {

  it('Should create the load action', () => {
    const action = load();

    expect(action.type).toEqual('LOAD'); // check the action type
  });
});
