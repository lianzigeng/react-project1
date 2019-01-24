
import React, {Component} from "react";
import {InjectGlobal} from "./style";
import Header from "./common/header/index";
import {IconFont} from "./statics/iconfont/iconfont";

import store from './store';
import {Provider} from "react-redux";

// redux 使用步骤 : 1.2 引入Provider,使得入口文件下的组件都能使用store
class App extends Component{

    render() {

        //provider 里面的所有组件都可以使用store 组件
        return (
            <Provider store={store}>
                {/*务必这样使用全局样式,放在最上面,*/}
                <InjectGlobal/>
                <IconFont/>
                <Header />
            </Provider>
        );
    }

}

export default App;