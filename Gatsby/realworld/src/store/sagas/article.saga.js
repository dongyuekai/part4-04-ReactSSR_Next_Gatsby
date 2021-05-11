import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

function* loadArticles({ limit, offset }) {
  let { data } = yield axios.get('/articles', {
    params: {
      limit,//offsetParent：获取带有定位的最近父元素
      offset
    }
  })
}
export default function* articleSaga() {
  yield takeEvery('loadArticles', loadArticles)
}