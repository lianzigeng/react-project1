import React, {Component} from "react";
import {InjectGlobal} from "./style";
import Header from "./common/header/index";
import {IconFont} from "./statics/iconfont/iconfont";

import store from './store';
import {Provider} from "react-redux";
import {BrowserRouter, Route} from "react-router-dom";

import Home from './pages/home/index';
import Detail from './pages/detail/index';

// redux 使用步骤 : 1.2 引入Provider,使得入口文件下的组件都能使用store
class App extends Component {

    render() {

        //provider 里面的所有组件都可以使用store 组件
        return (
            <Provider store={store}>
                <div>
                    {/*务必这样使用全局样式,放在最上面,*/}
                    <InjectGlobal/>
                    <IconFont/>
                    {/*路由的使用,*/}
                    <BrowserRouter>
                        <div>
                            <Header/>
                            {/*render 就是绘制的视图 path 就是路径 exact 路径完全相同时才显示*/}
                            {/*<Route path={'/'} exact  render={() => (*/}
                            {/*<div>home</div>*/}
                            {/*)}></Route>*/}
                            {/*<Route path={'/detail'} exact render={() => (*/}
                            {/*<div>detail</div>*/}
                            {/*)}></Route>*/}

                            <Route path={"/"} exact component={Home}/>
                            <Route path={"/detail"} exact component={Detail}/>
                        </div>
                    </BrowserRouter>
                </div>
            </Provider>
        );
    }

}

export default App;