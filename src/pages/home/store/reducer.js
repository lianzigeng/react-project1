import {fromJS} from "immutable";
import logoPic from '../../../statics/logo.png';

// redux 使用步骤 : 1.3.2 在数据中存储一个数据

////reducer分类:  1.0把需要该组件内的数据 另写为一个reducer文件
const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: '手绘',
        imgUrl: logoPic,
    }, {
        id: 2,
        title: '社会热点',
        imgUrl: logoPic,
    }, {
        id: 3,
        title: '简书电影',
        imgUrl: logoPic,
    }, {
        id: 4,
        title: '简书电影',
        imgUrl: logoPic,
    }, {
        id: 5,
        title: '简书电影',
        imgUrl: logoPic,
    }, {
        id: 6,
        title: '简书电影',
        imgUrl: logoPic,
    }, {
        id: 7,
        title: '简书电影',
        imgUrl: logoPic,
    }],
    articleList: [{
        id: 1,
        imgUrl:logoPic,
        title: '哇，9个方面3个月改变形象，白美其实很简单!',
        desc: '1.牙齿 2.天鹅颈/臂 3.护肤 4.减重减脂 5.瘦腿塑性 6.颈纹 7.眼睛 8.美白 1.牙齿 牙齿白真的很加分。 （1）日常清理就是使...',
    }, {
        id: 2,
        imgUrl:logoPic,
        title: '哇，9个方面3个月改变形象，白美其实很简单!',
        desc: '1.牙齿 2.天鹅颈/臂 3.护肤 4.减重减脂 5.瘦腿塑性 6.颈纹 7.眼睛 8.美白 1.牙齿 牙齿白真的很加分。 （1）日常清理就是使...',
    }, {
        id: 3,
        imgUrl:logoPic,
        title: '哇，9个方面3个月改变形象，白美其实很简单!',
        desc: '1.牙齿 2.天鹅颈/臂 3.护肤 4.减重减脂 5.瘦腿塑性 6.颈纹 7.眼睛 8.美白 1.牙齿 牙齿白真的很加分。 （1）日常清理就是使...',
    }, {
        id: 4,
        imgUrl:logoPic,
        title: '哇，9个方面3个月改变形象，白美其实很简单!',
        desc: '1.牙齿 2.天鹅颈/臂 3.护肤 4.减重减脂 5.瘦腿塑性 6.颈纹 7.眼睛 8.美白 1.牙齿 牙齿白真的很加分。 （1）日常清理就是使...',
    }, {
        id: 5,
        imgUrl:logoPic,
        title: '哇，9个方面3个月改变形象，白美其实很简单!',
        desc: '1.牙齿 2.天鹅颈/臂 3.护肤 4.减重减脂 5.瘦腿塑性 6.颈纹 7.眼睛 8.美白 1.牙齿 牙齿白真的很加分。 （1）日常清理就是使...',
    }, {
        id: 6,
        imgUrl:logoPic,
        title: '哇，9个方面3个月改变形象，白美其实很简单!',
        desc: '1.牙齿 2.天鹅颈/臂 3.护肤 4.减重减脂 5.瘦腿塑性 6.颈纹 7.眼睛 8.美白 1.牙齿 牙齿白真的很加分。 （1）日常清理就是使...',
    },
    ],
});


// redux 使用步骤 : 1.1创建数据  给与state 默认值

// state 必须是不可变得  immutable
export default (state = defaultState, action) => {

    switch (action.type) {

        default:
            return state;
    }
};