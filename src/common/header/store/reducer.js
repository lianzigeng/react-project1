import * as constants from './constants';
import {fromJS} from "immutable";

// redux 使用步骤 : 1.3.2 在数据中存储一个数据

////reducer分类:  1.0把需要该组件内的数据 另写为一个reducer文件
const defaultState = fromJS({
    focused: false,
    list: [],
    page:1,
    totalPage:1,
});


// redux 使用步骤 : 1.1创建数据  给与state 默认值

// state 必须是不可变得  immutable
export default (state = defaultState, action) => {

    // if (action.type === constants.SEARCH_FOCUS) {
    //     //因为数据变成不可变的了
    //     // const newState = JSON.parse(JSON.stringify(defaultState));
    //     // newState.focused = true;
    //     //immutable 对象的set方法,会结合之前的 不可变对象的值和
    //     //设置的值,返回一个全新的对象
    //     return state.set('focused', true);
    // }
    // if (action.type === constants.SEARCH_BLUR) {
    //     // const newState = JSON.parse(JSON.stringify(defaultState));
    //     // newState.focused = false;
    //     return state.set('focused', false);
    // }
    //
    // if (action.type === constants.CHANG_LIST) {
    //     //set  的后面的 数组 也必须是不可变的
    //     return state.set('list', action.data);
    // }

    switch (action.type) {
        case constants.SEARCH_FOCUS:
            return state.set('focused', true);
        case constants.SEARCH_BLUR:
            return state.set('focused', false);
        case constants.CHANG_LIST:
            return state.set('list', action.data);
        default:
            return state;
    }
};