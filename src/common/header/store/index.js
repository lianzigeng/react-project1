import reducer from './reducer';
import * as actionCreator from './actionCreator';
import * as constants from './constants';

//出口文件

//相当于一个 文件索引 ,当别的文件引入的时候
//"../common/header/store/reducer"
//可以写成"../common/header/store",他会自动查找index文件
export { reducer,actionCreator,constants }