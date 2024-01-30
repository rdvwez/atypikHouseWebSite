import {createAction} from '@ngrx/store';

export namespace LoadAction {

  export enum LoadTypeAction {
    LOAD = '[LOAD]'
  }

  export const load = createAction(
    LoadTypeAction.LOAD
  );
}

