import React, {PureComponent} from 'react';
import {HomeWrapper, HomeLeft, HomeRight} from "./style";

import Topic from './component/Topic';
import List from './component/List';
import Recommend from './component/Recommend';
import Writer from './component/Writer';
import {connect} from 'react-redux';
import {actionCreator} from './store/index';
import {BackTop} from './style';

//pureComponent 内置性能的调优 immutable 和pur一起使用,不然会出问题(其他的自己换)
class Home extends PureComponent {

   // Component 使用下面的方法进行调优,
    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     //性能调优
    //
    // }


    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {

        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className={'banner-img'}
                        src={'https://upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'}/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {
                    this.props.show ? <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null
                }
            </HomeWrapper>
        );
    }

    //页面挂载完毕
    componentDidMount() {
        // 优化
        // axios.get('/api/home.json')
        //     .then((res) => {
        //         const result = res.data.data;
        //         console.log(result);
        //         const action = {
        //             type: 'change_home_data',
        //             topicList: result.topicList,
        //             articleList: result.articleList,
        //             recommendList: result.recommendList
        //         };
        //         this.props.changeHomeData(action);
        //     })

        this.props.changeHomeData();

        this.bindEvents();

    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const mapState = (state) => ({
    show: state.get('home').get('show')
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreator.getHomeInfo();
        dispatch(action);
    },
    changeScrollTopShow() {
        console.log();
        if (document.documentElement.scrollTop > 100) {
            dispatch(actionCreator.toggleShow(true));
        } else {
            dispatch(actionCreator.toggleShow(false));
        }
    },
});

export default connect(mapState, mapDispatch)(Home);