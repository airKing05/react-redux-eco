import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from '../constants/constants';

function* getProducts(){
    // api call here
    let data = yield fetch('http://localhost:3001/products');
    data = yield data.json();
   // console.log("api called in saga", data)
    yield put({ type: SET_PRODUCT_LIST, payload:data})
}

function* productSaga(){
yield takeEvery(PRODUCT_LIST, getProducts);
};
export default productSaga;