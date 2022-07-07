import {takeEvery, put} from 'redux-saga/effects'
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from '../constants/constants';

function* getProducts(){
    // api call here
    let data = yield fetch('http://localhost:3001/products');
    data = yield data.json();
   // console.log("api called in saga", data)
    yield put({ type: SET_PRODUCT_LIST, payload:data})
};

function* searchProducts(searchItem){
    let searchResult = yield fetch(`http://localhost:3001/products?q=${searchItem.payload}`);
    searchResult = yield searchResult.json();
    console.log("api called in saga for searchResult", searchResult)
    yield put({ type: SET_PRODUCT_LIST, payload: searchResult })
}

function* productSaga(){
yield takeEvery(PRODUCT_LIST, getProducts);
yield takeEvery(SEARCH_PRODUCT, searchProducts)
};
export default productSaga;