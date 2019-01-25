import {compose, createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import reducer from './reducer';

//添加调试工具
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// redux 使用步骤 : 1.0 引入 redux 和react-redux ,创建store文件
const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

export default store;