// redux 使用步骤 : 1.3.2 在数据中存储一个数据

const defaultState = {

    focused: false,
};


// redux 使用步骤 : 1.1创建数据  给与state 默认值
export default (state = defaultState, action) => {

    if (action.type === "search_focus") {
        const newState = JSON.parse(JSON.stringify(defaultState));
        newState.focused = true;
        return newState;
    }
    if (action.type === "search_blur") {
        const newState = JSON.parse(JSON.stringify(defaultState));
        newState.focused = false;
        return newState;
    }

    return state;
};