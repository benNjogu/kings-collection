import { takeLatest, call, all, put } from "redux-saga/effects";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "./../../firebase/firebase.utils";
import { shopActionsTypes } from "../../constants/actionConstants";

export function* fetchCollectionsAsync() {
  yield console.log("i am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionsTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
