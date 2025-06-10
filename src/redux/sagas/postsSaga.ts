import {takeLatest, put, call} from 'redux-saga/effects';
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from '../reducers/postsReducer';

import {SagaIterator} from 'redux-saga';

function* fetchPosts(): SagaIterator {
  try {
    const response = yield call(fetch, 'https://dummyjson.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = yield call([response, 'json']);
    yield put(fetchPostsSuccess(data.posts));
  } catch (error: any) {
    yield put(fetchPostsFailure(error.message));
  }
}

export function* postsSaga() {
  yield takeLatest(fetchPostsRequest.type, fetchPosts);
}
