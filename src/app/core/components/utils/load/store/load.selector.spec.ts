import {createFeatureSelector, createSelector, Store, StoreModule} from '@ngrx/store';
import {TestBed} from '@angular/core/testing';
import {loadReducer} from './load.reducer';
import {loadSelector} from './load.selector';
import {Subject} from 'rxjs';

describe('load selector', () => {
  let store: Store;
  let destroyed$: Subject<any>

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature('loads', loadReducer.reducer)
      ],
    });
    let destroyed$ = new Subject<any>();
    store = TestBed.inject(Store);
  });

  it('Should select the load feature state', () => {
    const featureSelector = createFeatureSelector<loadReducer.loadState>('loads');
    const state = store.select(featureSelector).subscribe((result: loadReducer.loadState) => {
      if (result) {
        expect(result).toEqual({loading: false});
      }
    });
  });

  it('Should select the loading property', () => {
    const loadingSelector = createSelector(
      loadSelector,
      ({loading}: loadReducer.loadState) => loading
    );
    store.select(loadingSelector).subscribe((result: boolean) => {
      expect(result).toBe(false);
    })
  });
});
