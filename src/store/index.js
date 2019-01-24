import {createStore} from "redux";

import reducer from './reducer';

// redux 使用步骤 : 1.0 引入 redux 和react-redux ,创建store文件
const store = createStore(reducer);

export default store;