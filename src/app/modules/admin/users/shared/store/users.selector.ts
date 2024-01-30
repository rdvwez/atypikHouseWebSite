import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UserState} from './users.state';
import {UserInterface} from '../model/user.interface';

export const USERS_STATE_NAME = 'users';
export const usersSelector = createFeatureSelector<UserState>(USERS_STATE_NAME);

export const selectUsers = createSelector(usersSelector, ({users}) => {
  return users;
});

export const selectErrorUser = createSelector(usersSelector, ({error}) => {
  return error;
});

export const selectUser = (id: number) => createSelector(usersSelector,
  ({users}: UserState) => users.find((elt: UserInterface) => elt.id === id)
);
