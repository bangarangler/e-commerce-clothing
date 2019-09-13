import {takeEvery, call, put} from 'redux-saga/effects';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils.js';
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions.js';

import ShopActionTypes from './shop.types.js';

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot,
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  //collectionRef.get().then(snapshot => {
  //const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
  //dispatch(fetchCollectionsSuccess(collectionsMap));
  //}).catch (err => dispatch(fetchCollectionsFailure(err.message)))
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  );
}
