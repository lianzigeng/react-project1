import React,{Component} from 'react';
import {HeaderWrapper,Logo,Nav,NavItem,
    NavSearch,Addition,Button,SearchWrapper} from "./style";

class Header extends Component{


    constructor(props) {
        super(props);
        this.state ={
            focused:true,
        };
    }

    render() {
        return (
            <div>
                <HeaderWrapper>
                    <Logo />
                    <Nav>
                        <NavItem className={'left active'}>首页</NavItem>
                        <NavItem className={'left'}>下载</NavItem>
                        <NavItem className={'right'}>登录</NavItem>
                        <NavItem className={'right'}>
                            <i className={'iconfont'}>&#xe636;</i>
                        </NavItem>
                        <SearchWrapper>
                            <NavSearch
                              className={this.state.focused?'focused':""}
                            />
                            <i className={this.state.focused?'focused iconfont':"iconfont"}>&#xe62b;</i>
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Button className={'writing'}>
                            <i className={'iconfont'}>&#xe615;</i>
                            写文章</Button>
                        <Button className={"reg"}>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </div>
        );
    }

}

export default Header;