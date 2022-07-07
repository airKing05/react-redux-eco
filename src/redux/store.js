// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer';
import productSaga from './middlerware/productSaga';
import createSagaMiddleware from 'redux-saga'


// const dummyReducer = ()=>{
//     return 100
// }
// const store = createStore(rootReducer);
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: ()=> [sagaMiddleware]
});

sagaMiddleware.run(productSaga);
export default store;