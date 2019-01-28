import axios from "axios";
import {fromJS} from "immutable";


export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json')
            .then((res) => {
                const result = res.data.data;
                console.log(result);
                const action = changHomeData(result);
                dispatch(action);
            });
    }
};

const changHomeData = (result) => ({
    type: 'change_home_data',
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList
});


export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json')
            .then((res) => {
                const result = res.data.data;
                console.log(result);
                dispatch(addHomeList(result));
            });
    }
};
const addHomeList = (list) => ({
    type:"add_article_list",
    list:fromJS(list)
});

export const toggleShow =(show) =>({
   type:'toggle_scroll_show',
   show
});
