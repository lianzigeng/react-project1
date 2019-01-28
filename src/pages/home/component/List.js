import React, {Component} from 'react';
import {ListItem, ListInfo, LoadMore} from '../style';
import {connect} from 'react-redux';
import {actionCreator} from '../store/index';
import {Link} from "react-router-dom";

//a 标签会在加载一次html, 而react要求的是单页面加载所有
class List extends Component {

    render() {

        const {list, getMoreList} = this.props;

        return (
            <div>
                {
                    list.map((item) => {
                        return (
                            <Link
                                to={'/detail'}
                                key={item.get('id')}>
                                <ListItem>
                                    <img
                                        className={'pic'}
                                        src={item.get('imgUrl')}
                                    />
                                    <ListInfo>
                                        <h3 className={'title'}>
                                            {item.get('title')}
                                        </h3>
                                        <p className={'desc'}>
                                            {item.get('desc')}
                                        </p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore
                    onClick={getMoreList}
                >更多文字</LoadMore>
            </div>
        );
    }

}

const mapState = (state) => ({
    list: state.get("home").get("articleList"),
});

const mapDispath = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreator.getMoreList());
    },
});

export default connect(mapState, mapDispath)(List);