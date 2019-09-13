import {takeEvery} from 'redux-saga/effects';

import ShopActionTypes from './shop.types.js';

export function* fetchCollectionsAsync() {
  yield console.log('I am firing!!!');
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}
