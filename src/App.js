
import React, {Component, Fragment} from "react";
import {InjectGlobal} from "./style";
import Header from "./common/header/index";
import {IconFont} from "./statics/iconfont/iconfont";

class App extends Component{

    render() {

        return (
            <Fragment>
                {/*务必这样使用全局样式,放在最上面,*/}
                <InjectGlobal/>
                <IconFont/>
                <Header />
            </Fragment>
        );
    }

}

export default App;