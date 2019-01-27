import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper, Logo, Nav, NavItem,
    NavSearch, Addition, Button, SearchWrapper, SearchInfo
    , SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList,

} from "./style";

import {connect} from 'react-redux';

import {actionCreator} from './store';

// redux 使用步骤 : 1.3 让组件与 store 建立联系

// const Header = (props) => {
//
//     return (
//         <HeaderWrapper>
//             <Logo/>
//             <Nav>
//                 <NavItem className={'left active'}>首页</NavItem>
//                 <NavItem className={'left'}>下载</NavItem>
//                 <NavItem className={'right'}>登录</NavItem>
//                 <NavItem className={'right'}>
//                     <i className={'iconfont'}>&#xe636;</i>
//                 </NavItem>
//                 <SearchWrapper>
//                     {/*CSSTransition 会在NavSearch 添加slide-enter..这样的类名
//                              通过类名来进行动画的效果*/}
//                     <CSSTransition
//                         in={props.focused}
//                         timeout={200}
//                         classNames={"slide"}
//                     >
//                         <NavSearch
//                             className={props.focused ? 'focused' : ""}
//                             onFocus={props.handleInputFocus}
//                             onBlur={props.handleInputBlur}
//                         />
//                     </CSSTransition>
//                     <i className={props.focused ? 'focused iconfont' : "iconfont"}>&#xe62b;</i>
//                     {getListArea(props.focused)}
//                 </SearchWrapper>
//             </Nav>
//             <Addition>
//                 <Button className={'writing'}>
//                     <i className={'iconfont'}>&#xe615;</i>
//                     写文章</Button>
//                 <Button className={"reg"}>注册</Button>
//             </Addition>
//         </HeaderWrapper>
//     );
// };

// const getListArea = (show) => {
//     if (show) {
//         return (
//             <SearchInfo>
//                 <SearchInfoTitle>
//                     热门搜索
//                     <SearchInfoSwitch>
//                         换一批
//                     </SearchInfoSwitch>
//                 </SearchInfoTitle>
//                 <SearchInfoList>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>简书</SearchInfoItem>
//                     <SearchInfoItem>投稿</SearchInfoItem>
//                     <SearchInfoItem>教育</SearchInfoItem>
//                     <SearchInfoItem>简书</SearchInfoItem>
//                     <SearchInfoItem>投稿</SearchInfoItem>
//                 </SearchInfoList>
//             </SearchInfo>
//         );
//     } else {
//        return null;
//     }
// };


class Header extends Component {

    getListArea() {
        const {
            focused, list, page, totalPage, handleMouseEnter, handleMouseLeave,
            mouseIn, handleChangePage
        } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {

                if (i < newList.length) {
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    );
                }
            }
            if (focused || mouseIn) {
                return (
                    <SearchInfo
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch
                                onClick={() => handleChangePage(page, totalPage, this.spinIcon)}

                            >
                                {/*
                                ref 获取真正的渲染的节点
                                */}
                                <i ref={(icon) => {
                                    this.spinIcon = icon;
                                }} className={"iconfont spin"}>&#xe851;</i>
                                换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {
                                pageList
                            }
                        </SearchInfoList>
                    </SearchInfo>
                );
            } else {
                return null;
            }
        }

    }

    render() {
        const {focused, handleInputFocus, handleInputBlur, list} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>下载</NavItem>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavItem className={'right'}>
                        <i className={'iconfont'}>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        {/*CSSTransition 会在NavSearch 添加slide-enter..这样的类名
                             通过类名来进行动画的效果*/}
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames={"slide"}
                        >
                            <NavSearch
                                className={focused ? 'focused' : ""}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : "iconfont zoom"}>&#xe62b;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className={'writing'}>
                        <i className={'iconfont'}>&#xe615;</i>
                        写文章</Button>
                    <Button className={"reg"}>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    };

}

// 组件和store 做链接的时候,store的数据怎么映射到props上
//state 指store里面的所有数据 (更新状态)
//////reducer分类:  1.2原来获取需要从该组件的key中获取,
const mapStateToProps = (state) => {

    return {
        // focused: state.header.focused,
        //因为 state 数据是不可变得了,获取方式:
        focused: state.get('header').get("focused"),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.get('header').get('mouseIn'),
    }
};

//组件和store 做链接的时候,组件要改变store的数据就要调用dispatch方法
//我们把调用dispatch方法 全部写在这个方法里面,这样就有能力调用store.dispatch的方法
//(更改数据)
const mapDispatchToProps = (dispatch) => {

    return {
        handleInputFocus(list) {
            console.log(list);
            if (list.size === 0) {
                dispatch(actionCreator.getList());
            }
            const action = actionCreator.searchFocus();
            dispatch(action);
        },
        handleInputBlur() {
            const action = actionCreator.searchBlur();
            dispatch(action);
        },

        handleMouseEnter() {
            dispatch(actionCreator.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreator.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {

            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }
            spin.style.transform = `rotate(${originAngle + 360}deg)`;

            let showPage;
            if (page < totalPage) {
                showPage = page += 1;
            } else {
                showPage = 1;
            }
            dispatch(actionCreator.changePage(showPage));
        }
    }
};

// redux 使用步骤 : 1.3.1 更改输出方式,connect 默认是输出一个组件
export default connect(mapStateToProps, mapDispatchToProps)(Header);