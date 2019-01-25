import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";


const  changList =(data) =>(
    {
        type :constants.CHANG_LIST,
        data:fromJS(data),
        totalPage:Math.ceil(data.length /10),
    }
);


export const searchFocus =() =>({
    type: constants.SEARCH_FOCUS,

});

export const searchBlur=() =>({
    type: constants.SEARCH_BLUR,

});

export const getList =() =>{
  return (dispatch)=>{
      axios.get("/api/headerList.json")
          .then((res) =>{
              console.log("success "+res.data);
              const data = res.data;
              const action = changList(data.data);
              dispatch(action);
          })
          .catch(()=>{
              console.log("error");
          })
  };
};

export const  mouseEnter =()=>({

    type:constants.MOUSE_ENTER,
});

export const  mouseLeave =()=>({

    type:constants.MOUSE_LEAVE,
});


export const  changePage =(page)=>({

    type:constants.CHANGE_PAGE,
    page
});


