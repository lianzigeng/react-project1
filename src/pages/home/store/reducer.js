import {fromJS} from "immutable";
import logoPic from '../../../statics/logo.png';

// redux 使用步骤 : 1.3.2 在数据中存储一个数据

////reducer分类:  1.0把需要该组件内的数据 另写为一个reducer文件
const defaultState = fromJS({
    topicList: [],
    articleList:[],
    recommendList: [],
    show:false
});


// redux 使用步骤 : 1.1创建数据  给与state 默认值

// state 必须是不可变得  immutable
export default (state = defaultState, action) => {

    switch (action.type) {
        case "change_home_data":
            console.log(action);
          return state.merge({
               'topicList':fromJS(action.topicList),
               'articleList':fromJS(action.articleList),
               'recommendList':fromJS(action.recommendList),
            });
        case "add_article_list":
            return  state.set("articleList",state.get("articleList").concat(action.list));

        case 'toggle_scroll_show':
            return state.set('show',action.show);
        default:
            return state;
    }
};