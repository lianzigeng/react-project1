//相当于为 reducer 起了一个别名headerReducer
import { reducer as headerReducer} from "../common/header/store";
import {combineReducers} from "redux-immutable";

//reducer分类: 1.0 把数据分别管理,然后整合进这一个数据中
const  reducer = combineReducers({
    header: headerReducer,
});

export default reducer;