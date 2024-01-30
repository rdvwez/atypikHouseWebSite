import {createReducer, on} from '@ngrx/store';
import {UserState} from './users.state';
import {UsersAction} from './users.action';
import {UserInterface} from '../model/user.interface';

export namespace usersReducer {

  export const initialState: UserState = {
    users: [],
    error: ''
  };

  export const reducer = createReducer(
    initialState,
    on(UsersAction.listSuccess, (state, {users}) => {
      return {
        ...state,
        users
      };
    }),
    on(UsersAction.addSuccess, (state, {user}) => {
      return {
        ...state,
        users: [...state.users, user]
      };
    }),
    on(UsersAction.updateSuccess, (state, {user}) => {
      return {
        ...state,
        users: state.users.map((elt: UserInterface) => elt.id == user.id ? user : elt)
      }
    }),
    on(UsersAction.removeSuccess, (state, {id}) => {
      return {
        ...state,
        users: state.users.filter((elt: UserInterface) => elt.id !== id)
      }
    }),
    on(UsersAction.removeError,
      UsersAction.addError,
      UsersAction.updateError,
      UsersAction.listError,
      (state, {error}) => {
        return {
          ...state,
          error
        }
      })
  )
}
